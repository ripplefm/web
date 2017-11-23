import { actions } from '../actions/room-actions';

const initialState = {
  room: undefined,
  error: undefined,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.REQUEST_ROOM:
      return { ...state, loading: true };
    case actions.RECIEVE_ROOM:
      return { ...state, loading: false, room: action.room };
    case actions.REQUEST_ROOM_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}
