/**
 * Author iWuzhi
 * Date 2019/12/1
 * */
/* eslint-disable */
import request from '../../utils/request.js';

export async function getHome(payload) {
  return request.post('/home', {
    hello: payload,
  });
}
