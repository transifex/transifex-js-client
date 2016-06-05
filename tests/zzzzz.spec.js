describe('An api class', () => {
  it('should delete the project that it created', () => {
    return expect(txApi.projectDelete(slug)).
      to.eventually.have.property('statusCode', 204)
  });
});
