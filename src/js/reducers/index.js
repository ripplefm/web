import { combineReducers } from 'redux';
import auth from './auth-reducer';
import room from './room-reducer';
import roomChat from './room-chat-reducer';
import search from './search-reducer';

const root = combineReducers({ auth, room, roomChat, search });

export default root;
