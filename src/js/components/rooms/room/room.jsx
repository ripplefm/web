import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRoom, joinRoom, leaveRoom } from '../../../actions/room-actions';
import NavBar from '../../common/navbar/navbar';
import RoomSidebar from './room-sidebar';
import Chat from './room-chat';
import Player from './player/room-player';
import Search from './search/room-search';
import '../../../../css/rooms/room.css';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    room: state.room.room,
    loading: state.room.loading,
    error: state.room.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRoom: id => dispatch(getRoom(id)),
    joinRoom: id => dispatch(joinRoom(id)),
    leaveRoom: () => dispatch(leaveRoom())
  };
};

class Room extends Component {
  componentDidMount() {
    const { getRoom, match } = this.props;
    getRoom(match.params.id);
  }

  componentDidUpdate() {
    const { room, user, joinRoom } = this.props;
    if (room && user) {
      joinRoom(room.id);
    }
  }

  componentWillUnmount() {
    if (this.props.room) {
      this.props.leaveRoom();
    }
  }

  render() {
    const { room, error } = this.props;
    if (error) {
      return (
        <div>
          <NavBar />
          <h1>{error.status}</h1>
          <h2>{error.error}</h2>
        </div>
      );
    }
    return (
      <div className="room">
        <NavBar />
        <RoomSidebar room={room} />
        <Player track={room ? room.currentTrack : undefined} />
        <Chat className="room-chat" />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room);
