/**
 * The translationString mixin is responsible for retrieving and updating specific
 * translation strings from a given resource and target language
 * @module mixins/translationString
 */
 module.exports = (axios, urls, strToHash) => ({

  /**
   * Retrieve a list of all translation for the given language and project
   * @param {string} project_slug - The projects slug
   * @param {string} resource_slug - The resource slug
   * @param {string} language_code - The target language code
   * @example txApi.translationStrings('autotest', 'resourcetest', 'en')
  **/

  translationStrings(project_slug, resource_slug, language_code) {
    var path = urls['translationStrings']
      .replace('<project_slug>', project_slug)
      .replace('<resource_slug>', resource_slug)
      .replace('<language_code>', language_code);
    return axios.get(path)
  },

  /**
   * Retrieve a specifiv translation along with its details for the given language and project
   * @param {string} project_slug - The projects slug
   * @param {string} resource_slug - The resource slug
   * @param {string} language_code - The target language code
   * @param {string} source_string - The source string
   * @example txApi.translationStringRead('autotest', 'resourcetest', 'en')
  **/

  translationStringRead(project_slug, resource_slug, language_code, source_string ) {
    source_string = strToHash(source_string);
    var path = urls['translationString']
      .replace('<project_slug>', project_slug)
      .replace('<resource_slug>', resource_slug)
      .replace('<language_code>', language_code)
      .replace('<string_hash>', source_string);
    return axios.get(path)
  },

  /**
   * Update a specific translation for the given language and project
   * @param {string} project_slug - The projects slug
   * @param {string} resource_slug - The resource slug
   * @param {string} language_code - The target language code
   * @param {string} source_string - The source string
   * @param {object} form - An object containing the updated translation
   * @example txApi.translationStringRead('autotest', 'resourcetest', 'en')
  **/

  translationStringUpdate(project_slug, resource_slug, language_code, source_string, form) {
    source_string = strToHash(source_string);
    var path = urls['translationString']
      .replace('<project_slug>', project_slug)
      .replace('<resource_slug>', resource_slug)
      .replace('<language_code>', language_code)
      .replace('<string_hash>', source_string);
    return axios.put(path, form)
  }

})
