import { events } from 'ripple.fm';
import ripple from '../services/ripple-api';

export const actions = {
  REQUEST_ROOM: 'REQUEST_ROOM',
  RECIEVE_ROOM: 'RECIEVE_ROOM',
  REQUEST_ROOM_ERROR: 'REQUEST_ROOM_ERROR',
  JOIN_ROOM: 'JOIN_ROOM',
  LEAVE_ROOM: 'LEAVE_ROOM',
  RECIEVE_ROOM_TRACK: 'RECIEVE_ROOM_TRACK'
};

function requestRoom() {
  return {
    type: actions.REQUEST_ROOM
  };
}

function recieveRoom(room) {
  return {
    type: actions.RECIEVE_ROOM,
    room
  };
}

function requestRoomError(error) {
  return {
    type: actions.REQUEST_ROOM_ERROR,
    error
  };
}

export function getRoom(id) {
  return async dispatch => {
    dispatch(requestRoom());
    try {
      dispatch(recieveRoom(await ripple.getRoom(id)));
    } catch (err) {
      dispatch(requestRoomError(err));
    }
  };
}

export function recieveRoomTrack(track) {
  return {
    type: actions.RECIEVE_ROOM_TRACK,
    track
  };
}

export function joinRoom(id) {
  return {
    type: actions.JOIN_ROOM,
    id
  };
}

export function leaveRoom() {
  return {
    type: actions.LEAVE_ROOM
  };
}
