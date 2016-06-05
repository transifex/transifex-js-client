describe('Translation mixin should', () => {
  it('retrieve the translations for english', () => {
    return expect(txApi.translationRead(slug, 'resourcetest', 'en'))
      .to.eventually.have.property('statusCode', 200)
  });
  it('update the translations for english', () => {
    return expect(txApi.translationUpdate(slug, 'resourcetest', 'en', {
      'hello world': 'derp'
    })).to.eventually.have.property('statusCode', 200)
  });
  it('retrieve the updated translations for english', () => {
    return expect(txApi.translationRead(slug, 'resourcetest', 'en'))
      .to.eventually.have.deep.property('body.content.hello\ world', 'derp')
  });
  /*
  it('fail for  translations in nonexisting resources', () => {
    return expect(txApi.translationRead(slug, 'resourcetest', 'fr'))
      .to.eventually.be.rejected;
  });*/
});
