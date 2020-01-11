/**
 * Author iWuzhi
 * Date 2019/12/8
 * */
/* eslint-disable */
import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchData } from '../services/request';

import { REQUEST_FETCH_DATA_TEST, reducerActionCreator } from '../types';

function* _fetchData(action) {
  const { response, error } = yield call(fetchData, action.payload);
  console.log(response.data);
  if (response) {
    yield put(
      reducerActionCreator(REQUEST_FETCH_DATA_TEST, {
        data: response.data.data,
      }),
    );
  } else {
    console.error(error);
  }
}

export function* requestWatcher() {
  yield takeLatest(REQUEST_FETCH_DATA_TEST, _fetchData);
}
