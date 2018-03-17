import webpackConfig from './webpack/webpack.test'
import path from 'path'

module.exports = (config) => {
  config.set({

    basePath: path.join(process.cwd(), '/'),

    browsers: ['ChromeHeadless'],

    frameworks: ['mocha', 'chai', 'chai-sinon'],

    reporters: ['mocha'],

    preprocessors: {
      './test/index.js': ['webpack'],
      [require.resolve('chai-as-promised')]: ['webpack'],
    },

    files: [path.join(process.cwd(), 'test', 'index.js')],

    colors: true,
    autoWatch: true,

    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only',
      noInfo: true,
    },

    mochaReporter: {
      showDiff: true,
    }
  })
}
