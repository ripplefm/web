import { combineReducers } from 'redux';
import auth from './auth-reducer';
import room from './room-reducer';
import roomChat from './room-chat-reducer';
import search from './search-reducer';
import rooms from './rooms-reducer';

const root = combineReducers({ auth, room, roomChat, search, rooms });

export default root;
