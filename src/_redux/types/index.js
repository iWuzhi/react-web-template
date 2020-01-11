/**
 * Author iWuzhi
 * Date 2019/11/30
 * */
/* eslint-disable */
export * from './home';
export * from './request';

const __REDUCER_PREFIX = '__REDUCER_PREFIX';
export function reducerActionCreator(type, payload) {
  return {
    ...payload,
    type: `${__REDUCER_PREFIX}_${type}`,
  };
}
