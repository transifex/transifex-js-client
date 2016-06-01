/**
 * The project mixin is responsible creating, retrieving and updating TransifexApi
 * projects.
 * @module mixins/project
 */

export default {

  /**
   * Retrieve the projects that the user participates or owns.
   * @example txApi.projects().then(function(data) {})
  **/

  projects() {
    var path = this.urls['projects'];
    return this.request
      .get(path)
      .auth(this.username, this.password)
      .end()
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
    var path = this.urls['projects'];
    return this.request
      .post(path)
      .auth(this.username, this.password)
      .send(form)
      .end()
  },

  /**
   * Retrieve the details of a specific project
   * @param {string} project_slug - The projects slug
   * @example txApi.projectRead('test_project').then(function(data) {})
  **/

  projectRead(project_slug) {
    var path = this.urls['project']
      .replace('<project_slug>', project_slug);
    return this.request
      .get(path)
      .auth(this.username, this.password)
      .end()
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
    var path = this.urls['project']
      .replace('<project_slug>', project_slug);
    return this.request
      .put(path)
      .auth(this.username, this.password)
      .send(form)
      .end()
  },

  /**
   * Delete an existing project
   * @param {string} project_slug - The projects slug
   * @example
     txApi.projectDelete('testproject')
  **/

  projectDelete(project_slug) {
    var path = this.urls['project']
      .replace('<project_slug>', project_slug);
    return this.request
      .del(path)
      .auth(this.username, this.password)
      .send({slug: project_slug})
      .end()
  }
}
