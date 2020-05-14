/**
 * author iWuzhi
 * date 2020-05-12 10:52:45
 */

const webpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('./config');
const paths = require('../paths');

module.exports = webpackMerge(config, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ]
})