import { actions } from '../actions/rooms-actions';

const initialState = {
  rooms: [],
  loading: false,
  error: undefined
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.REQUEST_ROOMS:
      return { ...state, loading: true };
    case actions.RECIEVE_ROOMS:
      return { ...state, loading: false, rooms: action.rooms.rooms };
    case actions.REQUEST_ROOMS_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}
