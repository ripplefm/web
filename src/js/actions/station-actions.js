import ripple from '../services/ripple-api';

export const actions = {
  REQUEST_STATION: 'REQUEST_STATON',
  RECEIVE_STATION: 'RECEIVE_STATION',
  REQUEST_STATION_ERROR: 'REQUEST_STATION_ERROR',
  REQUEST_JOIN_STATION: 'REQUEST_JOIN_STATION',
  JOINED_STATION: 'JOINED_STATION',
  REQUEST_JOIN_STATION_FAILED: 'REQUEST_JOIN_STATION_FAILED',
  LEAVE_STATION: 'LEAVE_STATION'
};

function requestStation() {
  return {
    type: actions.REQUEST_STATION
  };
}

function receiveStation(station) {
  return {
    type: actions.RECEIVE_STATION,
    station
  };
}

function requestStationError(error) {
  return {
    type: actions.REQUEST_STATION_ERROR,
    error
  };
}

export function joinedStation() {
  return {
    type: actions.JOINED_STATION
  };
}

export function requestJoinStationFailed(error) {
  return {
    type: actions.REQUEST_JOIN_STATION_FAILED,
    error
  };
}

export function getStation(slug) {
  return async dispatch => {
    dispatch(requestStation());
    try {
      const start = new Date().getTime();
      const station = await ripple.getStation(slug);
      if (station.current_track) {
        station.current_track.current_time += new Date().getTime() - start;
      }
      dispatch(receiveStation(station));
    } catch (error) {
      dispatch(requestStationError(error));
    }
  };
}

export function joinStation(slug) {
  return {
    type: actions.REQUEST_JOIN_STATION,
    slug
  };
}

export function leaveStation() {
  return {
    type: actions.LEAVE_STATION
  };
}
