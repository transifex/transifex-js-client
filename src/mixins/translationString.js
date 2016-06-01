/**
 * The translationString mixin is responsible for retrieving and updating specific
 * translation strings from a given resource and target language
 * @module mixins/translationString
 */
export default {

  /**
   * Retrieve a list of all translation for the given language and project
   * @param {string} project_slug - The projects slug
   * @param {string} resource_slug - The resource slug
   * @param {string} language_code - The target language code
   * @example txApi.translationStrings('autotest', 'resourcetest', 'en')
  **/

  translationStrings(project_slug, resource_slug, language_code) {
    var path = this.urls['translationStrings']
      .replace('<project_slug>', project_slug)
      .replace('<resource_slug>', resource_slug)
      .replace('<language_code>', language_code);

    return this.request
      .get(path)
      .auth(this.username, this.password)
      .end()

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
    source_string = this.strToHash(source_string);
    var path = this.urls['translationString']
      .replace('<project_slug>', project_slug)
      .replace('<resource_slug>', resource_slug)
      .replace('<language_code>', language_code)
      .replace('<string_hash>', source_string);
    return this.request
      .get(path)
      .auth(this.username, this.password)
      .end()
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
    source_string = this.strToHash(source_string);
    var path = this.urls['translationString']
      .replace('<project_slug>', project_slug)
      .replace('<resource_slug>', resource_slug)
      .replace('<language_code>', language_code)
      .replace('<string_hash>', source_string);
    return this.request
      .put(path)
      .send(form)
      .auth(this.username, this.password)
      .end()
  }

}
