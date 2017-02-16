/**
 * The stat mixin is responsible for retrieving stats for a given Resouce.
 * @module mixins/stat
 */
 module.exports = (axios, urls) => ({

  /**
   * Retrieve the target languages of the project.
   * @param {string} project_slug - The projects slug
   * @example txApi.languages('testproject').then(function(data) {})
  **/

   stat(project_slug, resource_slug, lang_code) {
     var path = urls['stat'].
      replace('<project_slug>', project_slug).
      replace('<resource_slug>', resource_slug).
      replace('<lang_code>', lang_code);
     return axios.get(path);
   },
   stats(project_slug, resource_slug) {
     var path = urls['stats'].
      replace('<project_slug>', project_slug).
      replace('<resource_slug>', resource_slug);
     return axios.get(path);
   },
 });
