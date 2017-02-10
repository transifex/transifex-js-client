/**
 * The language mixin is responsible for retrieving and setting the languages
 * of a project.
 * @module mixins/language
 */
module.exports = (axios, urls) => ({

  /**
   * Retrieve the target languages of the project.
   * @param {string} project_slug - The projects slug
   * @example txApi.languages('testproject').then(function(data) {})
  **/

  languages(project_slug) {
    var path = urls['languages'].replace('<project_slug>', project_slug);
    return axios.get(path);
  },

  /**
   * Add a new target language to the project.
   * @param {string} project_slug - The projects slug
   * @param {object} form - An object containing the target language code
   * and the coordinators array
   * @example
   * txApi.languageCreate('testproject', {
   *    language_code: 'en',
   *    coordinators: [
   *      'alexapi1'
   *    ]
   * })
  **/

  languageCreate(project_slug, form) {
    var path = urls['languages'].
      replace('<project_slug>', project_slug);
    return axios.post(path, form);
  },

  /**
   * Retrieve the details of a project's target language.
   * @param {string} project_slug - The projects slug
   * @param {string} language_code - The target language code
   * @example txApi.languageRead('testproject','en').then(function(data) {});
  **/

  language(project_slug, language_code) {
    var path = urls['language'].
      replace('<project_slug>', project_slug).
      replace('<language_code>', language_code);
    return axios.get(path);
  },

  /**
   * Update a project's target language.
   * @param {string} project_slug - The projects slug
   * @param {string} language_code - The target language code
   * @param {object} form - An object containing the target language code
   * and the coordinators array
   * @example
   * txApi.languageUpdate('testproject', 'en', {
   *   list: 'mylist@listserver.com',
   *   coordinators: [
   *    'alexapi1'
   *   ]
   * })
  **/

  languageUpdate(project_slug, language_code, form) {
    var path = urls['language'].
      replace('<project_slug>', project_slug).
      replace('<language_code>', language_code);
    return axios.put(path, form);
  },

  /**
   * Remove a target language from the project
   * @param {string} project_slug - The projects slug
   * @param {string} language_code - The target language code
   * @example txApi.languageDelete('testproject','en')
  **/

  languageDelete(project_slug, language_code) {
    var path = urls['language'].
      replace('<project_slug>', project_slug).
      replace('<language_code>', language_code);
    return axios.delete(path);
  },
});
