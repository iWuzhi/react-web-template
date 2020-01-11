/**
 * Author iWuzhi
 * Date 2019/12/8
 * */
/* eslint-disable */
import request from '../../utils/request.js';

export async function fetchData(payload = {}) {
  return request.post('/request/fetch_data', { ...payload });
}
