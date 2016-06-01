var webpack = require('webpack');
var plugins = [new webpack.optimize.UglifyJsPlugin({
  minimize: true,
  compress: {
    drop_console: true
  },
})];

module.exports = {
  entry: './src/transifex-api.js',
  output: {
    path: './dist',
    filename: 'transifex-api.min.js',
    libraryTarget: 'umd',
    library: 'TransifexApi'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }]
  },
  plugins: plugins
};
