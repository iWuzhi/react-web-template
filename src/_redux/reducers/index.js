/**
 * Author iWuzhi
 * Date 2019/11/30
 * */
/* eslint-disable */
import { combineReducers } from 'redux';

let reducers = {};
const rc = require.context('./', false, /\.js$/);
rc.keys().forEach((moduleItem) => {
  if (moduleItem !== './index.js') {
    reducers = {
      ...reducers,
      ...rc(moduleItem).default,
    };
  }
});

export default combineReducers(reducers);
