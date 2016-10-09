describe('Stat mixin should', () => {
  it('retrieve the statistics for a given resource and language', () => {
    return expect(txApi.stat(slug, 'resourcetest', 'en')).
      to.eventually.have.property('status', 200)
  });
  it('retrieve the statistics for a given resource and all languages', () => {
    return expect(txApi.stats(slug, 'resourcetest', 'en')).
      to.eventually.have.property('status', 200)
  });
});
