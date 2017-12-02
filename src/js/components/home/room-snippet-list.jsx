import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'react-emotion';
import { getRooms } from '../../actions/rooms-actions';
import RoomSnippet, { RoomCard } from './room-snippet';
import RoomSnippetModal from '../common/modals/room-snippet-modal';

const ScrollbarCover = styled.div`
  width: 100%;
  height: 16px;
  background: #212121;
  position: absolute;
  bottom: 48px;
  left: 0px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const mapStateToProps = state => {
  return {
    loading: state.rooms.loading,
    rooms: state.rooms.rooms
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRooms: query => dispatch(getRooms(query))
  };
};

class RoomSnippetList extends Component {
  state = {
    clicked: false,
    clickedRoom: undefined,
    join: false
  };

  componentDidMount() {
    this.props.getRooms();
  }

  render() {
    const { clicked, clickedRoom, join } = this.state;
    const { loading, rooms } = this.props;
    return (
      <div style={{ padding: '48px 0px 48px 0px', position: 'relative' }}>
        {clicked && join ? (
          <Redirect push to={`/rooms/${clickedRoom.id}`} />
        ) : null}
        <h1 style={{ marginBottom: '16px', marginLeft: '15%' }}>
          Popular Rooms
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            overflowY: 'visible',
            overflowX: 'scroll'
          }}
        >
          {rooms.map(
            (room, index) =>
              clickedRoom === undefined || clickedRoom.id !== room.id ? (
                <RoomSnippet
                  loading={loading}
                  onClick={() =>
                    this.setState({ clicked: true, clickedRoom: room })
                  }
                  key={room.id || index}
                  room={room}
                />
              ) : (
                <RoomCard key={room.id} style={{ opacity: '0' }} />
              )
          )}
        </div>
        <ScrollbarCover />
        <RoomSnippetModal
          room={clickedRoom}
          visible={!!clickedRoom && clicked}
          onJoin={room => this.setState({ join: true })}
          onCancel={() => {
            this.setState({ clicked: false });
            setTimeout(() => this.setState({ clickedRoom: undefined }), 200);
          }}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomSnippetList);
