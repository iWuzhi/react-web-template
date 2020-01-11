/**
 * Author iWuzhi
 * Date 2019/12/1
 * */
/* eslint-disable */
import { all, fork } from 'redux-saga/effects';

const watchers = [];
const rc = require.context('./', false, /\.js$/);
rc.keys().forEach((moduleItem) => {
  if (moduleItem !== './index.js') {
    const _moduleItems = rc(moduleItem);
    Object.keys(_moduleItems).forEach((itemKey) => {
      watchers.push(_moduleItems[itemKey]);
    });
  }
});

export default function* rootSaga() {
  yield all(watchers.map((moduleItem) => fork(moduleItem)));
}
