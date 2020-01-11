/**
 * Author iWuzhi
 * Date 2019/12/1
 * */
/* eslint-disable */
const Mock = require('mockjs');

const rc = require.context('./', false, /\.js$/);
rc.keys().forEach((moduleItem) => {
  if (moduleItem !== './api.js') {
    const moduleObj = rc(moduleItem);
    Object.keys(moduleObj).forEach((moduleItemKey) => {
      Mock.mock(...moduleObj[moduleItemKey]);
    });
  }
});
