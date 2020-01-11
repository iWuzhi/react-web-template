/**
 * Author iWuzhi
 * Date 2019/12/1
 * */

/* eslint-disable */
import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  timeout: 6000,
  headers: {},
  withCredentials: false,
});

instance.interceptors.response.use(
  (response) => {
    // 未登录
    if (response.data.code === 2) {
      // return Promise.reject({ error: response });
    } else if (response.data.code !== 1) {
      // 其他异常情况
      // TODO: 页面错误提示 2019年12月08日14:19:56 iWuzhi
      // return Promise.reject({ error: response });
    }
    return { response };
  },
  (error) => {
    // 捕获框架错误
    if (error.response) {
      // TODO: 页面错误提示 2019年12月08日14:19:56 iWuzhi
    } else {
      // TODO: 页面错误提示 2019年12月08日14:19:56 iWuzhi
    }
    return { error };
  },
);

// 捕获接口错误
instance.interceptors.response.use(
  (response) => response,
  (error) => error,
);
export default instance;
