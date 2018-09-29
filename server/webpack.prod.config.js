const config = require('./webpack.config.js');

const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

console.info('loading webpack production environment - server');

module.exports = () => {
  config.mode = 'production';
  config.devtool = 'hidden-source-map';
  config.optimization = {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: false,
      }),
    ],
  };
  config.plugins = [
    // /* Delete Distribution before building it */
    new CleanWebpackPlugin(['Student-Dashboard/server.js'], { root: path.resolve(__dirname, '..') }),
  ];
  return config;
};
