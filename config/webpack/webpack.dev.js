const webpack = require('webpack');
const core = require('./webpack.core');
const merge  = require('webpack-merge');

module.exports = merge(core, {
  devtool: 'cheap-module-source-map',
});
