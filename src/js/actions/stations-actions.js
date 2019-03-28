import ripple from '../services/ripple-api';

export const actions = {
  REQUEST_STATIONS: 'REQUEST_STATIONS',
  RECEIVE_STATIONS: 'RECEIVE_STATIONS',
  REQUEST_STATIONS_ERROR: 'REQUEST_STATIONS_ERROR',
  REQUEST_FOLLOWING_STATIONS: 'REQUEST_FOLLOWING_STATIONS',
  RECEIVE_FOLLOWING_STATIONS: 'RECEIVE_FOLLOWING_STATIONS',
  REQUEST_FOLLOWING_STATIONS_ERROR: 'REQUEST_FOLLOWING_STATIONS_ERROR'
};

function requestStations() {
  return {
    type: actions.REQUEST_STATIONS
  };
}

function receiveStations(stations) {
  return {
    type: actions.RECEIVE_STATIONS,
    stations
  };
}

function requestStationsError(error) {
  return {
    type: actions.REQUEST_STATIONS_ERROR,
    error
  };
}

function requestFollowingStations() {
  return {
    type: actions.REQUEST_FOLLOWING_STATIONS
  };
}

function receiveFollowingStations(stations) {
  return {
    type: actions.RECEIVE_FOLLOWING_STATIONS,
    stations
  };
}

function requestFollowingStationsError(error) {
  return {
    type: actions.REQUEST_FOLLOWING_STATIONS_ERROR,
    error
  };
}

export function getStations() {
  return async dispatch => {
    dispatch(requestStations());
    try {
      const stations = await ripple.getStations();
      dispatch(receiveStations(stations));
    } catch (err) {
      dispatch(requestStationsError(err));
    }
  };
}

export function getFollowingStations() {
  return async dispatch => {
    dispatch(requestFollowingStations());
    try {
      const stations = await ripple.getFollowedStations();
      dispatch(receiveFollowingStations(stations));
    } catch (err) {
      dispatch(requestFollowingStationsError(err));
    }
  };
}
