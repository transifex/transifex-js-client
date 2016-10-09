describe('After all', () => {
  it('resouce mixin should delete the resource it created', () => {
    return expect(txApi.resourceDelete(slug, 'resourcetest'))
      .to.eventually.have.property('statusCode', 204)
  });
  it('project mixin should delete the project that it created', () => {
    return expect(txApi.projectDelete(slug)).
      to.eventually.have.property('statusCode', 204)
  });
});
