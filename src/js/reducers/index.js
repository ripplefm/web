import { combineReducers } from 'redux';
import auth from './auth-reducer';
import room from './room-reducer';
import roomChat from './room-chat-reducer';

const root = combineReducers({ auth, room, roomChat });

export default root;
