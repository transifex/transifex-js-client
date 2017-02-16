process.env.BABEL_ENV = 'test';
const webpackEnv = {test: true};
const webpackConfig = require('./webpack.config.babel')(webpackEnv);

const testGlob = 'tests/**/*.spec.js';
const srcGlob = 'src/**/!(*.spec|*.stub).js';

module.exports = config => {
  config.set({
    basePath: '',
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai'],
    files: [
      testGlob,
      srcGlob
    ],
    preprocessors: {
      [testGlob]: ['webpack', 'env'],
      [srcGlob]: ['webpack'],
    },
    webpack: webpackConfig,
    webpackMiddleware: {noInfo: true},
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      check: {
        global: {
          statements: 11,
          branches: 0,
          functions: 0,
          lines: 11,
        },
      },
      reporters: [
        {type: 'lcov', dir: 'coverage/', subdir: '.'},
        {type: 'json', dir: 'coverage/', subdir: '.'},
        {type: 'text-summary'}
      ],
    },
    client: {
      mocha: {
        timeout: 6000, // 6 seconds - upped from 2 seconds
      },
    },
    envPreprocessor: [
      'username',
      'password',
      'tx_host',
      'COVERALLS_SERVICE_NAME',
      'COVERALLS_REPO_TOKEN'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,
  });
};
