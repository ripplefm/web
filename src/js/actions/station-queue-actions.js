import ripple from '../services/ripple-api';

export const actions = {
  ADD_TRACK_TO_QUEUE: 'ADD_TRACK_TO_QUEUE',
  RECEIVE_TRACK: 'RECEIVE_TRACK',
  RECEIVE_QUEUE_TRACK: 'RECEIVE_QUEUE_TRACK'
};

export function receiveTrack(track) {
  return {
    type: actions.RECEIVE_TRACK,
    track
  };
}

export function addTrackToQueue(track) {
  return {
    type: actions.ADD_TRACK_TO_QUEUE,
    track
  };
}

export function receiveQueueTrack(track) {
  return {
    type: actions.RECEIVE_QUEUE_TRACK,
    track
  };
}
