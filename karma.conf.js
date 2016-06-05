var webpackConf = require('./webpack.config.js');
module.exports = function(config) {
  config.set({
    files: [
      // Each file acts as entry point for the webpack configuration
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'tests/*.js'
    ],
    frameworks: ['mocha', 'chai-as-promised', 'chai'],
    preprocessors: {
      'tests/*.js': ['webpack']
    },
    webpack: {
      module: webpackConf.module
    },
    webpackMiddleware: {
      noInfo: true
    },
    //browsers: ['Chrome'],
    browsers: ['PhantomJS'],
    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-phantomjs-launcher'),
      require('karma-chrome-launcher'),
      require('karma-chai-as-promised'),
      require('karma-spec-reporter')
    ],
    reporters: ['spec'],
    client: {
      mocha: {
        timeout: 6000
      }
    }
  });
};
