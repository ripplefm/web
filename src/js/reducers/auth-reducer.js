import { actions } from '../actions/oauth-actions';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = {
  user: user === null ? undefined : user,
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.RECEIVE_USER:
      return { ...state, loading: false, user: action.user };
    case actions.AUTH_ERROR:
      return { ...state, loading: false };
    case actions.LOGOUT:
      return { ...state, user: undefined };
    default:
      return state;
  }
}
