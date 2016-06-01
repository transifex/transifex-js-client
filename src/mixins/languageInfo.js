/**
 * The languageInfo mixin is responsible for retrieving the list of all languagesInfo
 * supported by Transifex, as well a details objects for each supported language.
 * @module mixins/languageInfo
 */
export default {

  /**
   * Retrieve the list of languages supported by Transifex.
   * @example txApi.languagesInfo().then(function(data) {})
  **/

  languagesInfo() {
    var path = this.urls['languagesInfo']
    return this.request
      .get(path)
      .auth(this.username, this.password)
      .end()
  },

  /**
   * Retrieve the details of specific language.
   * @param {string} language_code - The target language code
   * @example txApi.languageInfo('testproject').then(function(data) {})
  **/

  languageInfo(language_code) {
    var path = this.urls['languageInfo']
      .replace('<language_code>', language_code)
    return this.request
      .get(path)
      .auth(this.username, this.password)
      .end()
  },
}
