var axios = require('axios');
var extend = require('extend');
var md5 = require('md5');

var strToHash = function(source_string) {
  return md5(unescape(encodeURIComponent(source_string + ':')))
}

// Set config defaults when creating the instance
module.exports = function(options) {
  let opts = {};
  /* istanbul ignore next */
  let baseURL = options.base_url; //|| 'https://www.transifex.com';
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
  let axios_client = axios.create(opts);
  let url_map = require('./url.js')(baseURL + api_prefix);

  return extend({},
    require('./mixins/project.js')(axios_client, url_map),
    require('./mixins/language.js')(axios_client, url_map),
    require('./mixins/languageInfo.js')(axios_client, url_map),
    require('./mixins/resource.js')(axios_client, url_map, strToHash),
    require('./mixins/resourceString.js')(axios_client, url_map, strToHash),
    require('./mixins/translation.js')(axios_client, url_map),
    require('./mixins/translationString.js')(axios_client, url_map, strToHash),
    require('./mixins/stat.js')(axios_client, url_map)
  )


}
