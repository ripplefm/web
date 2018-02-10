import { actions } from '../actions/station-actions';
import { actions as queueActions } from '../actions/station-queue-actions';

const initialState = {
  station: undefined,
  error: undefined,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.REQUEST_STATION:
      return { ...state, loading: true };
    case actions.REQUEST_STATION_ERROR:
      return { ...state, loading: false, error: action.error };
    case actions.RECEIVE_STATION:
      return { ...state, loading: false, station: action.station };
    case queueActions.RECEIVE_TRACK:
      const { station } = state;
      return { ...state, station: { ...station, current_track: action.track } };
    default:
      return state;
  }
}
