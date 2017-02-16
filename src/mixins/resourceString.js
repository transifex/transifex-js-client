/**
 * The resourceString mixin is responsible for retrieving and updating specific
 * source strings that belong to a given resource.
 * @module mixins/project
 */

module.exports = (axios, urls, strToHash) => ({

  /**
   * Retrieve the details of a specific source string
   * @param {string} project_slug - The projects slug
   * @param {string} resource_slug - The resource slug
   * @param {string} source_string - The source string
   * @example
   * txApi.resourceStringRead('autotest', 'resourcetest', 'hello world')
  **/

  resourceString(project_slug, resource_slug, source_string) {
    source_string = strToHash(source_string);
    var path = urls['resourceString'].
      replace('<project_slug>', project_slug).
      replace('<resource_slug>', resource_slug).
      replace('<string_hash>', source_string);
    return axios.get(path);
  },

  /**
   * Update an existing source string
   * @param {string} project_slug - The projects slug
   * @param {string} resource_slug - The resource slug
   * @param {string} source_string - The source string
   * @param {object} form - An object containing the source string's update
   * @example
     txApi.resourceStringUpdate('autotest', 'resourcetest', 'hello world', {
       comment: 'This is a comment'
     })
  **/

  resourceStringUpdate(project_slug, resource_slug, source_string, form) {
    source_string = strToHash(source_string);
    var path = urls['resourceString'].
      replace('<project_slug>', project_slug).
      replace('<resource_slug>', resource_slug).
      replace('<string_hash>', source_string);
    return axios.put(path, form);
  },
});
