/**
 * author iWuzhi
 * date 2020-05-12 10:26:03
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const path = require('path');

const paths = require('../paths');
const app = require('../app');
const externalsConfig = require('./externalsConfig');

const isDev = process.env.NODE_ENV === 'development';

// Handle Externals
const externals = [];
const injectScripts = [];
const copyOptions = [];
externalsConfig.forEach(item => {
  // webpack#externals
  externals.push(item.config);
  // HtmlWebpackPlugin#inject scripts
  const curPath = isDev ? item.devPath : item.prodPath;
  const fileName = curPath.split('/').pop();
  injectScripts.push(`./${fileName}`);
  // Copy externals from node_modules to dist
  copyOptions.push({
    from: curPath,
    to: path.join(paths.DIST, fileName)
  });
})

module.exports = {
  mode: 'development',
  entry: {
    app: paths.APP_ENTRY
  },
  output: {
    path: paths.DIST,
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].chunk.[contenthash].js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  externals: externals,
  module: {
    rules: [{
        test: /.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(?:le|c)ss$/,
        exclude: /node_modules/,
        use: [{
            loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: isDev,
              // app-container  => appContainer
              localsConvention: 'camelCase',
              esModule: true,
              // css module
              modules: {
                mode: (resourcePath) => {
                  // xx.pure.css
                  if (/pure\.(?:le|c)ss$/.test(resourcePath)) {
                    return 'pure';
                  }
                  // xx.global.css
                  if (/global\.(?:le|c)ss$/.test(resourcePath)) {
                    return 'global';
                  }
                  // xx.css
                  return 'local';
                },
                // [path] exclude <SRC>
                context: paths.SRC,
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64]',
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.join(paths.ROOT)
              }
            }
          },
        ]
      },
      {
        test: /\.(?:png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
      {
        test: /\.(?:png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        use: [
          'file-loader'
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // FIX: https://github.com/webpack-contrib/copy-webpack-plugin/issues/455
    new CopyPlugin(copyOptions),
    new HtmlWebpackPlugin({
      title: app.name,
      template: path.join(paths.PUBLIC, 'index.html'),
      injectScripts: injectScripts
    }),
    // FIXME
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  
  context: paths.ROOT
}