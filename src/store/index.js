import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import createMiddleware from './clientMiddleware';
import reducer from '../reducers';

const middleware = applyMiddleware(createMiddleware(), logger());

const store = createStore(
	reducer,
	middleware
);

export default store;