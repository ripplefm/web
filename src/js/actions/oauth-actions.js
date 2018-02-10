import ripple, {
  logout as rippleLogout,
  refreshImplicitToken
} from '../services/ripple-api';

export const actions = {
  RECEIVE_USER: 'RECEIVE_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  LOGOUT: 'LOGOUT'
};

function receiveUser(user) {
  return {
    type: actions.RECEIVE_USER,
    user
  };
}

function authError() {
  return {
    type: actions.AUTH_ERROR
  };
}

export function init() {
  return async dispatch => {
    try {
      const user = await ripple.getCurrentUser();
      dispatch(receiveUser(user));
    } catch (e) {
      refreshImplicitToken()
        .then(() => {})
        .catch(err => dispatch(authError()));
    }
  };
}

export function logout() {
  rippleLogout();
  return {
    type: actions.LOGOUT
  };
}
