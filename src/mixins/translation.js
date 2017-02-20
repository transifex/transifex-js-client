/**
 * The translation mixin is responsible for retrieving and updating translation
 * files.
 * @module mixins/translation
*/

module.exports = (axios, urls) => ({

  /**
   * Retrieve a resource translation for the given language and project
   * @param {string} project_slug - The projects slug
   * @param {string} resource_slug - The resource slug
   * @param {string} language_code - The target language code
   * @example txApi.translation('autotest', 'resourcetest', 'en')
  **/
  translation(project_slug, resource_slug, language_code) {
    var path = urls['translation'].
      replace('<project_slug>', project_slug).
      replace('<resource_slug>', resource_slug).
      replace('<language_code>', language_code);
    return axios.get(path, {
      transformResponse: [function(data) {
        return JSON.parse((JSON.parse(data)).content);
      }],
    });
  },

  /**
   * Retrieve a translation file for the given language, project and i18n type
   * @param {string} project_slug - The projects slug
   * @param {string} resource_slug - The resource slug
   * @param {string} language_code - The target language code
   * @param {string} i18n_type - The target i18n type
   * @example txApi.translationFile('autotest', 'resourcetest', 'en', 'PO')
  **/
  translationFile(project_slug, resource_slug, language_code, i18n_type) {
    var path = urls['translation'].
      replace('<project_slug>', project_slug).
      replace('<resource_slug>', resource_slug).
      replace('<language_code>', language_code);
    path += `?file=${i18n_type}`;
    return axios.get(path);
  },

  /**
   * Update a resource translation for the given language and project
   * @param {string} project_slug - The projects slug
   * @param {string} resource_slug - The resource slug
   * @param {string} language_code - The target language code
   * @param {object} form - An object containing the updated translation
   * @example
   * txApi.translationUpdate('autotest', 'resourcetest', 'en', {
   *   'hello world': 'derp'
   * })
  **/

  translationUpdate(project_slug, resource_slug, language_code, form) {
    var path = urls['translation'].
      replace('<project_slug>', project_slug).
      replace('<resource_slug>', resource_slug).
      replace('<language_code>', language_code);

    return axios.put(path, {
      content: JSON.stringify(form),
    });
  },
});
