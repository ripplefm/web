import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { getRoom, joinRoom, leaveRoom } from '../../../actions/room-actions';
import NavBar from '../../common/navbar/navbar';
import SideBar from './sidebar';
import Chat from './room-chat';
import '../../../../css/rooms/room.css';

const Player = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-height: 56.25vw;
`;

const Tabs = styled.div`
  background: orange;
`;

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
        <SideBar className="room-sidebar" />
        <Player className="room-player">
          <h3>No Track Playing</h3>
        </Player>
        <Chat className="room-chat" />
        <Tabs className="swipeable-tab-group">Tabs</Tabs>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room);
