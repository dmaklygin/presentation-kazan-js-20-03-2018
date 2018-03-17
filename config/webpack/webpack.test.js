import core from './webpack.core'
import merge from 'webpack-merge'

module.exports = merge(core, {
  entry: './app/index.js',

  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },

  module: {
    loaders: [{test: require.resolve('chai-as-promised'), loader: 'babel'}],
  },

  devtool: 'cheap-module-source-map',

  performance: {
    hints: false,
  },
})
