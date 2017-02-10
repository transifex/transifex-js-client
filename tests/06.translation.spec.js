describe('Translation mixin should', () => {
  it('retrieve the translations for english', () => {
    return expect(txApi.translation(slug, 'resourcetest', 'en'))
      .to.eventually.have.property('status', 200)
  });
  it('update the translations for english', () => {
    return expect(txApi.translationUpdate(slug, 'resourcetest', 'en', {
      'hello world': 'derp'
    })).to.eventually.have.property('status', 200)
  });
  it('retrieve the updated translations for english', () => {
    return expect(txApi.translation(slug, 'resourcetest', 'en'))
      .to.eventually.have.deep.property('data.hello\ world', 'derp')
  });
  it('fail for  translations in nonexisting resources', () => {
    return expect(txApi.translation(slug, 'resourcetest', 'fr'))
      .to.eventually.be.rejected;
  });
});
