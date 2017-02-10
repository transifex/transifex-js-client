describe('After all', () => {
  it('project mixin should delete the project that it created', () => {
    return expect(txApi.projectDelete(slug)).
      to.eventually.have.property('status', 204)
  });
});
