/**
 * Author iWuzhi
 * Date 2019/11/30
 * */
/* eslint-disable */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers/index.js';
import rootSaga from './sagas/index.js';

const sagaMiddleware = createSagaMiddleware();

function composeEnhancers(enhancer) {
  if (process.env.NODE_ENV === 'development') {
    return composeWithDevTools(enhancer);
  }
  return enhancer;
}

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
