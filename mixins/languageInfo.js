/**
 * The languageInfo mixin is responsible for retrieving the list of all languagesInfo
 * supported by Transifex, as well a details objects for each supported language.
 * @module mixins/languageInfo
 */
 module.exports = (axios, urls) => ({

  /**
   * Retrieve the list of languages supported by Transifex.
   * @example txApi.languagesInfo().then(function(data) {})
  **/

  languagesInfo() {
    var path = urls['languagesInfo']
    return axios.get(path)
  },

  /**
   * Retrieve the details of specific language.
   * @param {string} language_code - The target language code
   * @example txApi.languageInfo('testproject').then(function(data) {})
  **/

  languageInfo(language_code) {
    var path = urls['languageInfo']
      .replace('<language_code>', language_code)
    return axios.get(path)
  },
})
