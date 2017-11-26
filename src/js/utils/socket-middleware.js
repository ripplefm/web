import { events } from 'ripple.fm';
import ripple from '../services/ripple-api';
import {
  recieveRoomTrack,
  actions as roomActions
} from '../actions/room-actions';
import {
  recieveMessage,
  actions as chatActions
} from '../actions/room-chat-actions';

const socketMiddleware = () => {
  let room;
  return store => next => action => {
    switch (action.type) {
      case roomActions.JOIN_ROOM:
        room = ripple.joinRoom(action.id);
        room.on(events.ROOM_CHAT_MESSAGE, message =>
          store.dispatch(recieveMessage(message))
        );
        room.on(events.ROOM_CURRENT_TRACK, track =>
          store.dispatch(recieveRoomTrack(track))
        );
        break;
      case chatActions.SEND_CHAT_MESSAGE:
        room.sendMessage(action.text);
        break;
      case roomActions.LEAVE_ROOM:
        room.leave();
        return next(action);
      default:
        return next(action);
    }
  };
};

export default socketMiddleware();
