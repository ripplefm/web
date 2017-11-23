import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import socketMiddleware from './utils/socket-middleware';
import root from './reducers';

const store = createStore(root, applyMiddleware(thunk, socketMiddleware));

export default store;
