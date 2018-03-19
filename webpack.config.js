const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    bundle: `${__dirname}/src/index.js`,
  },
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: '[name].js',
  },

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      '__REACT_DEVTOOLS_GLOBAL_HOOK__': '({ isDisabled: true })'
    }),
  ].concat(
    process.argv.indexOf('-p') === -1 ? [] : [
      new UglifyJsPlugin({
        uglifyOptions: {
          comments: false
        },
      }),
    ]
  ),
};
