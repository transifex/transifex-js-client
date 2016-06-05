import Promise from 'promise';
import superagent from 'superagent';
import superagentpromise from 'superagent-promise';
import objectAssign from 'object-assign';

import urlMap from './url.js';
import md5 from './md5.js';

import projectMixin from './mixins/project';
import resourceMixin from './mixins/resource';
import resourceStringMixin from './mixins/resourceString';
import languageMixin from './mixins/language';
import translationMixin from './mixins/translation';
import languageInfoMixin from './mixins/languageInfo';
import translationStringMixin from './mixins/translationString';

/**
 * Implements a client to the Transifex Api
 *
 * @class transifexApi
 */
let TransifexApi = {

  /**
   * Returns an instantiated api object.
   * @param {object} options - A hash containing username and password
   * @example txApi = transifexApi.connect({username: password:})
  **/

 connect(options) {
   this.username = options.username;
   this.password = options.password;
   this.base_url = options.base_url || 'https://www.transifex.com/';
   this.api_prefix = options.api_prefix || 'api/2';
   this.urls = urlMap(`${this.base_url}${this.api_prefix}`);
   return this;
 },
 strToHash(source_string) {
   return this.md5(unescape(encodeURIComponent(source_string + ':')))
 }
}

TransifexApi.request = superagentpromise(superagent, Promise);
TransifexApi.md5 = md5;

TransifexApi = objectAssign(TransifexApi,
 projectMixin,
 resourceMixin,
 resourceStringMixin,
 languageMixin,
 translationMixin,
 languageInfoMixin,
 translationStringMixin
)

export default TransifexApi
