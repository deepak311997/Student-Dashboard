const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  context: path.resolve(__dirname, '../client'),
  entry: {
    app: './src/index.js',
    vendor: [
      'axios',
      'babel-polyfill',
      'react',
      'react-dom',
      'react-router',
      'react-router-dom',
      'react-redux',
    ],
  },
  resolve: {
    modules: ['../node_modules', 'src'],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ['es2015', 'react', 'stage-2'] },
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'resolve-url-loader',
          'sass-loader?sourceMap',
        ],
      },
      {
        test: /\.(ttf|eot|woff2?)(\?v=[a-z0-9=\.]+)?$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, '../Student-Dashboard/client'),
    filename: '[name].bundle.[hash].js',
  },
  devServer: {
    port: 8080,
    contentBase: '../Student-Dashboard/client',
    // Host for testing in VM
    allowedHosts: ['10.0.2.2'],
    proxy: {
      // Put here the Server URL
      '/Student-Dashboard/api/**': {
        target: 'http://localhost/',
      },
      '/**': {
        target: '../Student-Dashboard/client/index.html',
        secure: false,
        bypass: (req) => {
          if (req.path.indexOf('.js') !== -1 || req.path.indexOf('.css') !== -1 || req.path.indexOf('img/') !== -1 || req.path.indexOf('assets/') !== -1 || req.path.indexOf('fonts/') !== -1) {
            return '../Student-Dashboard/client';
          }
          if (req.headers.accept.indexOf('html') !== -1) {
            return '../Student-Dashboard/client/index.html';
          }
        },
      },

    },
  },
  plugins: [
    // /* Delete Distribution before building it */
    new CleanWebpackPlugin(['Student-Dashboard/client'], { root: path.resolve(__dirname, '..') }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets/favicon.png', to: 'assets/' },
      { from: 'src/assets/img', to: './img' },
      { from: 'src/app-config.js', to: './' },
      { from: 'build/locales', to: 'locales/' },
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // Code splitting
    new MiniCssExtractPlugin({
      filename: 'bundle.[hash].css',
    }),
    // Ignore locales from momentJS
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // Watch translation files
    new WebpackShellPlugin({
      onBuildStart: ['node client/scripts/i18n-scanner --watch'],
    }),
  ],
  optimization: {
    // automatically split chunks
    splitChunks: {
      name: 'vendor',
      minChunks: Infinity,
      filename: '[name].bundle.[hash].js',
    },
  },
};
