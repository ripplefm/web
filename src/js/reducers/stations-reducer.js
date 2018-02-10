import { actions } from '../actions/stations-actions';

const initialState = {
  stations: [],
  loading: false,
  error: undefined
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.REQUEST_STATIONS:
      return { ...state, loading: true };
    case actions.RECEIVE_STATIONS:
      return { ...state, loading: false, stations: action.stations.stations };
    case actions.REQUEST_STATIONS_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}
