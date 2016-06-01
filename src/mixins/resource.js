/**
 * The resource mixin is responsible for adding, retrieving and updating resources
 * from an existing project.
 * @module mixins/resource
 */

export default {

  /**
   * Retrieve the resources of the specified project.
   * @param {string} project_slug - The projects slug
   * @example txApi.resources().then(function(data) {})
  **/

  resources(project_slug) {
    var path = this.urls['resources']
      .replace('<project_slug>', project_slug)
    return this.request
      .get(path)
      .auth(this.username, this.password)
      .end()
  },

  /**
   * Add a new resource to a project
   * @param {string} project_slug - The projects slug
   * @param {object} form - An object containing the resource definition
   * @example
     txApi.resourceCreate('autotest', {
       slug: 'resourcetest',
       name: 'resourcetest',
       i18n_type: 'KEYVALUEJSON',
       content: JSON.stringify({"hello world": "hello world"}),
     })
  **/

  resourceCreate(project_slug, form) {
    var path = this.urls['resources']
      .replace('<project_slug>', project_slug)
    return this.request
      .post(path)
      .auth(this.username, this.password)
      .send(form)
      .end()
  },

  /**
   * Retrieve the details of a project's resource
   * @param {string} project_slug - The projects slug
   * @param {string} resource_slug - The resource slug
   * @example txApi.resourceRead('autotest', 'resourcetest')
  **/

  resourceRead(project_slug, resource_slug) {
    //if (!resource_slug) Promise.resolve();
    var path = this.urls['resource']
      .replace('<project_slug>', project_slug)
      .replace('<resource_slug>', resource_slug);
    return this.request
      .get(path)
      .auth(this.username, this.password)
      .end()
  },

  /**
   * Update an existing resource
   * @param {string} project_slug - The projects slug
   * @param {string} resource_slug - The resource slug
   * @param {object} form - An object containing the resource definition
   * @example
     txApi.resourceUpdate('autotest', 'resourcetest', {
       name: 'updatedresourcetest',
     })
  **/

  resourceUpdate(project_slug, resource_slug, form) {
    var path = this.urls['resource']
      .replace('<project_slug>', project_slug)
      .replace('<resource_slug>', resource_slug);
    return this.request
      .put(path)
      .auth(this.username, this.password)
      .send(form)
      .end()
  },

  /**
   * Delete an existing resource
   * @param {string} project_slug - The projects slug
   * @param {string} resource_slug - The resource slug
   * @example
     txApi.resourceDelete('autotest', 'resourcetest)
  **/

  resourceDelete(project_slug, resource_slug) {
    var path = this.urls['resource']
      .replace('<project_slug>', project_slug)
      .replace('<resource_slug>', resource_slug);
    return this.request
      .del(path)
      .auth(this.username, this.password)
      .send({slug: resource_slug})
      .end()
  }
}
