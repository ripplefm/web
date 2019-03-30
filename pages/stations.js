import React, { Component } from 'react';
import { message } from 'antd';
import { getOrCreate } from '../lib/services/ripple-api';
import wrapUnauthorized from '../lib/utils/wrap-unauthorized';
import StationContainer from '../components/station/station-container';
import NavBar from '../components/common/navbar';
import StationSidebar from '../components/station/station-sidebar';
import Player from '../components/station/player';
import Info from '../components/station/station-info';
import Chat from '../components/station/chat';
import SwipeableTabs from '../components/station/swipeable-tabs';

const getStationWelcomeMessage = station => ({
  sender: { username: 'Server', id: '666' },
  message: [
    {
      type: 'text',
      value: `Welcome to ${station.name}!`
    }
  ]
});

export default class Station extends Component {
  trackStartedRef = undefined;
  trackFinishedRef = undefined;
  chatRef = undefined;
  state = { station: undefined, socket: undefined, messages: [], width: 0 };

  static async getInitialProps(context) {
    const { slug } = context.query;
    const ripple = await getOrCreate(context);
    const results = await Promise.all([
      wrapUnauthorized(ripple.getStation(slug)),
      wrapUnauthorized(ripple.getCurrentUser())
    ]);
    return { slug, station: results[0], user: results[1] };
  }

  onSendMessage = text => {
    this.state.socket.push('chat', { text });
  };

  addTrackToQueue = track => {
    this.state.socket.push('track', { track_url: track.url });
    message.success(`Added '${track.title}' to queue`);
  };

  onMessageReceived = msg => {
    const messages = [...this.state.messages];
    msg.timestamp = Date.now();
    const last = messages.pop();
    if (last && last.sender.id === msg.sender.id) {
      this.setState({
        messages: [
          ...messages,
          {
            sender: last.sender,
            message: [
              ...last.message,
              { type: 'text', value: '\n' },
              ...msg.message
            ]
          }
        ]
      });
    } else {
      this.setState({ messages: [...this.state.messages, msg] });
    }
  };

  onResize = () => {
    this.setState({ width: window.innerWidth });
  };

  async componentDidMount() {
    const { slug } = this.props;
    this.setState({ station: this.props.station, width: window.innerWidth });
    window.addEventListener('resize', this.onResize);
    const ripple = await getOrCreate();
    const socket = await ripple.joinStation(slug);
    this.setState({
      socket,
      messages: [getStationWelcomeMessage(this.props.station)]
    });
    this.trackStartedRef = socket.on(
      'station_track_started',
      ({ current_track }) =>
        this.setState({ station: { ...this.state.station, current_track } })
    );
    this.trackFinishedRef = socket.on('station_track_finished', () =>
      this.setState({ station: { ...this.state.station, current_track: null } })
    );

    this.chatRef = socket.on('station_chat', this.onMessageReceived);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
    if (this.state.socket) {
      const { socket } = this.state;
      socket.off('station_track_started', this.trackStartedRef);
      this.trackStartedRef = undefined;
      socket.off('station_track_finished', this.trackFinishedRef);
      this.trackFinishedRef = undefined;
      socket.off('station_chat', this.chatRef);
      this.chatRef = undefined;
      socket.leave();
    }
  }

  render() {
    const { width, messages } = this.state;
    const { user } = this.props;
    const station = this.state.station || this.props.station;
    if (station === undefined) {
      return (
        <div>
          <NavBar user={user} />
          <h1>404</h1>
        </div>
      );
    }
    return (
      <StationContainer>
        <NavBar user={user} />
        <StationSidebar onAddToQueue={this.addTrackToQueue} user={user} />
        <Player track={station.current_track} />
        {width >= 992 ? (
          <Info station={station} canFollow={user !== undefined} />
        ) : null}
        {width >= 992 ? (
          <Chat
            messages={messages}
            sendMessage={this.onSendMessage}
            user={user}
          />
        ) : null}
        <SwipeableTabs
          station={station}
          canFollow={user !== undefined}
          messages={messages}
          sendMessage={this.onSendMessage}
          onAddToQueue={this.addTrackToQueue}
          width={width}
          user={user}
        />
      </StationContainer>
    );
  }
}
