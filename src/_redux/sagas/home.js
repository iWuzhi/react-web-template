/**
 * Author iWuzhi
 * Date 2019/12/1
 * */
/* eslint-disable */
import { call, put, takeLatest } from 'redux-saga/effects';

import { getHome as getHomeAPI } from '../services/home';

import { HOME_UPDATE_NAME_ACTION, reducerActionCreator } from '../types';

function* getHome(action) {
  const { response, error } = yield call(getHomeAPI, action.payload);
  if (response) {
    yield put(reducerActionCreator(HOME_UPDATE_NAME_ACTION, response.data));
  } else {
    console.error(error);
  }
}

export function* homeWatcher() {
  yield takeLatest(HOME_UPDATE_NAME_ACTION, getHome);
}
