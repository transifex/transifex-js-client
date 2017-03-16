const axios = require('axios');
const extend = require('extend');
const md5 = require('blueimp-md5');
const Project = require('./mixins/project');
const Language = require('./mixins/language');
const LanguageInfo = require('./mixins/languageInfo');
const Resource = require('./mixins/resource');
const ResourceString = require('./mixins/resourceString');
const Translation = require('./mixins/translation');
const TranslationString = require('./mixins/translationString');
const Stat = require('./mixins/stat');
const strToHash = (source_string) => md5((unescape(encodeURIComponent(source_string + ':'))));

// Set config defaults when creating the instance
module.exports = function(options) {
  const opts = {};
  /* istanbul ignore next */
  const baseURL = options.base_url; // || 'https://www.transifex.com';
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
  opts.auth.base_url = baseURL;
  const api_prefix = options.api_prefix || '/api/2';
  const axios_client = axios.create(opts);
  const url_map = require('./url.js')(baseURL + api_prefix);

  return extend(
    { urls: url_map },
    Project(axios_client, url_map),
    Language(axios_client, url_map),
    LanguageInfo(axios_client, url_map),
    Resource(axios_client, url_map, strToHash),
    ResourceString(axios_client, url_map, strToHash),
    Translation(axios_client, url_map),
    TranslationString(axios_client, url_map, strToHash),
    Stat(axios_client, url_map),
    opts.auth
  );
};
