 /**
 * The project mixin is responsible creating, retrieving and updating projects.
 * @module mixins/project
 */

module.exports = (axios, urls) => ({

  /**
   * Retrieve the projects that the user participates or owns.
   * @example txApi.projects().then(function(data) {})
  **/
  projects() {
    var path = urls['projects'];
    return axios.get(path);
  },

  /**
   * Create a new project
   * @param {object} form - An object containing the projects definition
   * @example
     txApi.projectCreate({
       name: 'autotest',
       slug: 'autotest',
       private: true,
       description: 'this is an automated test',
       source_language_code: 'af'
     })
  **/

  projectCreate(form) {
    var path = urls['projects'];
    return axios.post(path, form);
  },

  /**
   * Retrieve the details of a specific project
   * @param {string} project_slug - The projects slug
   * @example txApi.projectRead('test_project').then(function(data) {})
  **/

  projectRead(project_slug) {
    var path = urls['project'].replace('<project_slug>', project_slug);
    return axios.get(path);
  },

  /**
   * Update an existing project
   * @param {string} project_slug - The projects slug
   * @param {object} form - An object containing the projects update
   * @example
     txApi.projectUpdate('testproject', {
       description: 'this is an updated description',
     })
  **/

  projectUpdate(project_slug, form) {
    var path = urls['project'].replace('<project_slug>', project_slug);
    return axios.put(path, form);
  },

  /**
   * Delete an existing project
   * @param {string} project_slug - The projects slug
   * @example
     txApi.projectDelete('testproject')
  **/

  projectDelete(project_slug) {
    var path = urls['project'].replace('<project_slug>', project_slug);
    return axios.delete(path);
  },
});
