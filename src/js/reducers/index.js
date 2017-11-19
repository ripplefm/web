import { combineReducers } from 'redux';
import auth from './auth-reducer';

const root = combineReducers({ auth });

export default root;
