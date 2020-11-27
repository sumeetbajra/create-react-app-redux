import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import createMiddleware from './clientMiddleware';
import reducer from '../reducers';

const middleware = applyMiddleware(createMiddleware(), createLogger());

const store = createStore(
  reducer,
  middleware
);

export default store;