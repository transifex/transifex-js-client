describe('LanguagesInfo mixin should', () => {
  it('retrieve the list of all supported languages', () => {
    return expect(txApi.languagesInfo()).
      to.eventually.have.property('data').with.length.above(30)
  });
  it('retrieve the additional info from a specific language', () => {
    return expect(txApi.languageInfo('pt_BR')).
      to.eventually.have.deep.property('data.name','Portuguese (Brazil)')
  });
});
