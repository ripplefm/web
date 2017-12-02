import ripple from '../services/ripple-api';

export const actions = {
  REQUEST_ROOMS: 'REQUEST_ROOMS',
  RECIEVE_ROOMS: 'RECIEVE_ROOMS',
  REQUEST_ROOMS_ERROR: 'REQUEST_ROOMS_ERROR'
};

function requestRooms() {
  return {
    type: actions.REQUEST_ROOMS
  };
}

function recieveRooms(rooms) {
  return {
    type: actions.RECIEVE_ROOMS,
    rooms
  };
}

function requestRoomsError(error) {
  return {
    type: actions.REQUEST_ROOMS_ERROR,
    error
  };
}

export function getRooms(query = {}) {
  return async dispatch => {
    dispatch(requestRooms());
    try {
      const rooms = await ripple.getRooms(query.page, query.limit);
      dispatch(recieveRooms(rooms));
    } catch (err) {
      dispatch(requestRoomsError(err));
    }
  };
}
