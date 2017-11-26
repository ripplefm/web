import store from '../store';
import ripple from '../services/ripple-api';

export const actions = {
  START_ADD_TRACK_TO_QUEUE: 'START_ADD_TRACK_TO_QUEUE',
  TRACK_ADDED_TO_QUEUE: 'TRACK_ADDED_TO_QUEUE',
  ADD_TRACK_TO_QUEUE_ERROR: 'ADD_TRACK_TO_QUEUE_ERROR',
  START_DELETE_TRACK_FROM_QUEUE: 'START_DELETE_TRACK_FROM_QUEUE',
  TRACK_DELETED_FROM_QUEUE: 'TRACK_DELETED_FROM_QUEUE',
  DELETE_TRACK_FROM_QUEUE_ERROR: 'DELETE_TRACK_FROM_QUEUE_ERROR'
};

function startAddTrackToQueue() {
  return {
    type: actions.START_ADD_TRACK_TO_QUEUE
  };
}

function trackAddedToQueue(track) {
  return {
    type: actions.TRACK_ADDED_TO_QUEUE,
    track
  };
}

function addTrackToQueueError(error) {
  return {
    type: actions.ADD_TRACK_TO_QUEUE_ERROR,
    error
  };
}

export function addTrackToQueue(track) {
  return async dispatch => {
    dispatch(startAddTrackToQueue());
    try {
      const room = store.getState().room.room;
      const queue = await ripple.addTrackToRoom(room.id, track.url);
      dispatch(trackAddedToQueue(track));
    } catch (err) {
      dispatch(addTrackToQueueError(err));
    }
  };
}
