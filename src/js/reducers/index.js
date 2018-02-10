import { combineReducers } from 'redux';
import auth from './auth-reducer';
import station from './station-reducer';
import stationChat from './station-chat-reducer';
import search from './search-reducer';
import stations from './stations-reducer';

const root = combineReducers({
  auth,
  station,
  stationChat,
  search,
  stations
});

export default root;
