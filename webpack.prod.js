/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const commmonWebpack = require('./webpack.common');

module.exports = merge(commmonWebpack, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
});
