/**
 * Author iWuzhi
 * Date 2019/11/30
 **/

const merge = require("webpack-merge");
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const baseConfig = require("./base");

module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new CompressionPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
          extractComments: true,
        }
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  }
});