import ripple from '../services/ripple-api';

export const actions = {
  START_AUTH: 'START_AUTH',
  RECIEVE_USER: 'RECIEVE_USER',
  AUTH_ERROR: 'AUTH_ERROR',
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

function toggleModal(tab) {
  return {
    type: actions.TOGGLE_AUTH_MODAL,
    tab
  };
}

function setModalTab(tab) {
  return {
    type: actions.SET_AUTH_MODAL_TAB,
    tab
  };
}

export function createGuestUser() {
  return async dispatch => {
    const data = await ripple.createGuest();
    dispatch(recieveUser(data.user));
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
  return dispatch => {
    if (typeof tab !== 'string') {
      tab = 'login';
    }
    dispatch(toggleModal(tab));
  };
}

export function setAuthModalTab(tab = 'login') {
  return dispatch => {
    dispatch(setModalTab(tab));
  };
}
