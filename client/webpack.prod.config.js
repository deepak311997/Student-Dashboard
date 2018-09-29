const config = require('./webpack.config.js');

const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

console.info('loading webpack production environment');

module.exports = (env = {}) => {
  const isDev = env.isDev;

  config.mode = 'production';
  config.devtool = isDev ? 'cheap-module-source-map' : '';
  config.optimization = {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: isDev,
      }),
    ],
    splitChunks: {
      name: 'vendor',
      minChunks: Infinity,
      filename: '[name].bundle.[hash].js',
    },
  };
  config.plugins = [
    // /* Delete Distribution before building it */
    new CleanWebpackPlugin(['Student-Dashboard/client'], { root: path.resolve(__dirname, '..') }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets/favicon.png', to: 'assets/' },
      { from: 'src/assets/img', to: './img' },
      { from: 'src/app-config.js', to: '.' },
      { from: 'build/locales', to: 'locales/' },
    ]),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // Code splitting
    new MiniCssExtractPlugin({
      filename: 'bundle.[hash].css',
    }),
    // Ignore locales from momentJS
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ];

  return config;
};
