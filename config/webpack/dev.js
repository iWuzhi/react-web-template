/**
 * Author iWuzhi
 * Date 2019/11/30
 **/

const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");

const paths = require("../paths");

const baseConfig = require("./base");

module.exports = merge(baseConfig, {
  entry: ["react-hot-loader/patch"],
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: paths.public,
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
});