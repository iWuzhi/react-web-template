/**
 * Author iWuzhi
 * Date 2019/11/30
 **/

// 初始化process.env
require('dotenv').config();

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');

const SRC_PATH = path.join(process.cwd(), "src");
module.exports = {
  mode: "development",
  entry: [
    "@babel/polyfill",
    path.join(SRC_PATH, "index.jsx")
  ],
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        include: SRC_PATH,
        loader: 'eslint-loader',
        options: {
          fix: true  // use prettier
        }
      },
      {
        test: /\.(js|jsx)$/,
        include: SRC_PATH,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules|bower_components/,
        use: [
          {
            loader: process.env.NODE_ENV === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              // publicPath: '../'
            }
          },
          // 'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1, modules: true } },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: 'config/postcss.config.js'
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules|bower_components/,
        use: [
          {
            loader: process.env.NODE_ENV === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
            options: {}
          },
          // 'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1, modules: false } },
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name]_[hash:7].[ext]'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), "public/index.html"),
      inject: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.MOCK': JSON.stringify(process.env.MOCK),
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new StyleLintPlugin({
      files: '**/*.(le|c)ss',
      configFile: path.join(process.cwd(), '.stylelintrc.yml'),
      fix: true
    }),
  ],
  context: path.resolve(process.cwd()),
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
}