import ripple from '../services/ripple-api';
import {
  joinedStation,
  requestJoinStationFailed,
  actions as stationActions
} from '../actions/station-actions';
import {
  receiveMessage,
  actions as chatActions
} from '../actions/station-chat-actions';
import {
  receiveTrack,
  receiveQueueTrack,
  actions as queueActions
} from '../actions/station-queue-actions';

const socketMiddleware = () => {
  let station;
  return store => next => action => {
    switch (action.type) {
      case stationActions.REQUEST_JOIN_STATION:
        if (station == undefined) {
          ripple
            .joinStation(action.slug)
            .then(s => {
              station = s;
              store.dispatch(joinedStation());
              station.on('station_chat', data =>
                store.dispatch(receiveMessage(data))
              );
              station.on('station_track_started', data =>
                store.dispatch(receiveTrack(data.current_track))
              );
              station.on('station_track_finished', data =>
                store.dispatch(receiveTrack(null))
              );
              station.on('station_queue_track_added', data => {
                store.dispatch(receiveQueueTrack(data));
              });
            })
            .catch(err => store.dispatch(requestJoinStationFailed(err)));
        }
        break;
      case chatActions.SEND_CHAT_MESSAGE:
        station.push('chat', { text: action.text });
        break;
      case queueActions.ADD_TRACK_TO_QUEUE:
        station.push('track', { track_url: action.track.url });
        break;
      case stationActions.LEAVE_STATION:
        // station.leave();
        station = undefined;
        return next(action);
      default:
        return next(action);
    }
  };
};

export default socketMiddleware();
