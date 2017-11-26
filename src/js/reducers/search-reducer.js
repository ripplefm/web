import { actions } from '../actions/search-actions';

const initialState = {
  provider: 'YouTube',
  results: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.SET_PROVIDER:
      return { ...state, provider: action.provider };
    case actions.START_SEARCH:
      return { ...state, loading: true };
    case actions.RECIEVE_SEARCH_RESULTS:
      return { ...state, loading: false, results: action.results };
    default:
      return state;
  }
}
