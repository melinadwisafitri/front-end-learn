// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');
const commmonWebpack = require('./webpack.common');

module.exports = merge(commmonWebpack, {
  mode: 'development',
});
