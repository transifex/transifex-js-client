import axios from 'axios';
import extend from 'extend';
import md5 from 'blueimp-md5';
import Project from './mixins/project';

const strToHash = function(source_string) {
  return md5(unescape(encodeURIComponent(source_string + ':')));
};

// Set config defaults when creating the instance
export default function(options) {
  const opts = {};
  /* istanbul ignore next */
  const baseURL = options.base_url;
  opts.headers = { 'Content-Type': 'application/json' };

  if (options.username) {
    opts.auth = {
      username: options.username,
      password: options.password,
    };
  } else if (options.token) {
    opts.auth = {
      username: 'api',
      password: options.token,
    };
  } else {
    throw Error('No auth provided');
  }
  const api_prefix = options.api_prefix || '/api/2';
  const axios_client = axios.create(opts);
  const url_map = require('./url.js')(baseURL + api_prefix);

  return extend({},
    Project(axios_client, url_map)
  );
};
