import Promise from 'promise';

/**
 * The translation mixin is responsible for retrieving and uploading translation
 * files.
 * @module mixins/translation
 */

export default {

  /**
   * Retrieve a resource translation for the given language and project
   * @param {string} project_slug - The projects slug
   * @param {string} resource_slug - The resource slug
   * @param {string} language_code - The target language code
   * @example txApi.translationRead('autotest', 'resourcetest', 'en')
  **/

  translationRead(project_slug, resource_slug, language_code) {
    var path = this.urls['translation']
      .replace('<project_slug>', project_slug)
      .replace('<resource_slug>', resource_slug)
      .replace('<language_code>', language_code);

    var that = this;
    return new Promise(function(resolve, reject) {
      that.request
        .get(path)
        .auth(that.username, that.password)
        .type('application/json')
        .end(function(err, res) {
          if (err) return reject(err);
          /* istanbul ignore next */
          if (res.body && res.body.content) {
            res.body.content = JSON.parse(res.body.content);
          }
          return resolve(res)
        })
    })
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
    var path = this.urls['translation']
      .replace('<project_slug>', project_slug)
      .replace('<resource_slug>', resource_slug)
      .replace('<language_code>', language_code);

    return this.request
      .put(path)
      .auth(this.username, this.password)
      .send({
        content: JSON.stringify(form)
      })
      .end()
  }
}
