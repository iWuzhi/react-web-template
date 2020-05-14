/**
 * author iWuzhi
 * date 2020-05-12 10:52:45
 */

const webpackMerge = require('webpack-merge');

const config = require('./config');
const paths = require('../paths');

module.exports = webpackMerge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: paths.DIST
  }
})