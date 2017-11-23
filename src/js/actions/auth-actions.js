import ripple, { logout as rippleLogout } from '../services/ripple-api';

export const actions = {
  START_AUTH: 'START_AUTH',
  RECIEVE_USER: 'RECIEVE_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  LOGOUT: 'LOGOUT',
  REGISTRATION_SUCCESS: 'REGISTRATION_SUCCESS',
  TOGGLE_AUTH_MODAL: 'TOGGLE_AUTH_MODAL',
  SET_AUTH_MODAL_TAB: 'SET_AUTH_MODAL_TAB'
};

function startAuth() {
  return {
    type: actions.START_AUTH
  };
}

function recieveUser(user) {
  return {
    type: actions.RECIEVE_USER,
    user
  };
}

function authError(error) {
  return {
    type: actions.AUTH_ERROR,
    error
  };
}

function registrationSuccess() {
  return {
    type: actions.REGISTRATION_SUCCESS
  };
}

export function createGuestUser() {
  return async dispatch => {
    const data = await ripple.createGuest();
    dispatch(recieveUser(data.user));
  };
}

export function registerUser(username, email, password) {
  return async dispatch => {
    dispatch(startAuth());
    try {
      const data = await ripple.register(username, email, password);
      dispatch(registrationSuccess());
    } catch (err) {
      dispatch(authError(err));
    }
  };
}

export function login(emailOrUsername, password) {
  return async dispatch => {
    dispatch(startAuth());
    try {
      const data = await ripple.login(emailOrUsername, password);
      dispatch(recieveUser(data.user));
    } catch (err) {
      dispatch(authError(err));
    }
  };
}

export function logout() {
  rippleLogout();
  return {
    type: actions.LOGOUT
  };
}

export function init() {
  return async dispatch => {
    try {
      const user = await ripple.getCurrentUser();
      dispatch(recieveUser(user));
    } catch (e) {
      dispatch(createGuestUser());
    }
  };
}

export function toggleAuthModal(tab = 'login') {
  if (typeof tab !== 'string') {
    tab = 'login';
  }
  return {
    type: actions.TOGGLE_AUTH_MODAL,
    tab
  };
}

export function setAuthModalTab(tab = 'login') {
  return {
    type: actions.SET_AUTH_MODAL_TAB,
    tab
  };
}
