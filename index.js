var axios = require('axios');
var urlMap = require('./url.js');
var project = require('./mixins/project.js');

// Set config defaults when creating the instance
module.exports = function(options) {
  let opts = {};
  opts.baseURL = options.base_url || 'https://www.transifex.com';
  if (options.username) {
    opts.auth = {
      username: options.username,
      password: options.password
    }
  } else if (options.token) {
    opts.defaults = {
      headers: {
        common: {
          Authorization: options.token
        }
      }
    }
  } else {
    throw Error('No auth provided');
  }

  let api_prefix = options.api_prefix || 'api/2';
  return project(axios.create(opts), urlMap(api_prefix));
}
