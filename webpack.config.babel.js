/* eslint no-console:"off" */
const {resolve} = require('path');
const webpack = require('webpack');
const webpackValidator = require('webpack-validator');
const {getIfUtils, removeEmpty} = require('webpack-config-utils');

module.exports = env => {
  const {ifProd, ifNotProd} = getIfUtils(env);
  const config = webpackValidator({
    context: resolve('src'),
    entry: {
      app: './index.js',
    },
    output: {
      path: 'dist',
      filename: 'transifex-api.min.js',
      libraryTarget: 'umd',
      library: 'TransifexApi',
    },
    devtool: ifProd('source-map', 'eval'),
    module: {
      loaders: [
        {test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/}
      ],
    },
    plugins: removeEmpty([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: ifProd('"production"', '"development"'),
        },
      })
    ]),
  });
  if (env.debug) {
    console.log(config);
    debugger // eslint-disable-line
  }
  return config;
};
