var axios = require('axios');
var urlMap = require('./url.js');
var project = require('./mixins/project.js');

//global.txv1 = require('transifex-js-client');


// Set config defaults when creating the instance
module.exports = function(options) {
  let opts = {};

  let baseURL = options.base_url || 'https://www.transifex.com';
  opts.headers = {'Content-Type': 'application/json'}

  if (options.username) {
    opts.auth = {
      username: options.username,
      password: options.password
    }
  } else if (options.token) {
    opts.headers.common = [];
    opts.defaults.headers.common['Authorization'] = options.token
  } else {
    throw Error('No auth provided');
  }


  let api_prefix = options.api_prefix || '/api/2';
  return project(axios.create(opts), urlMap(baseURL + api_prefix));
}
