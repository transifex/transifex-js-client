/**
 * The project mixin is responsible creating, retrieving and updating TransifexApi
 * projects.
 * @module mixins/project
 */

module.exports = (axios, urls) => ({
  projects: function() {
    return axios.get(urls['projects'])
  }
});
