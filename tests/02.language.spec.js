describe('Language mixin should', () => {
  it('add the english target language', () => {
    return expect(txApi.languageCreate(slug, {
      language_code: 'en',
      coordinators: [
        'alexapi1'
      ]
    })).to.eventually.have.property('status', 201);
  });
  it('update the list field', () => {
    return expect(txApi.languageUpdate(slug, 'en', {
      list: 'mylist@listserver.com',
      coordinators: [
        'alexapi1'
      ]
    })).to.eventually.have.property('status', 200);
  });
  it('retrieve the updated language', () => {
    return expect(txApi.languageRead(slug, 'en'))
      .to.eventually.have.deep.property('data.coordinators[0]', 'alexapi1')
  });
  it('and retrieve all languages', () => {
    return expect(txApi.languages(slug))
      .to.eventually.have.deep.property('data[0].language_code', 'en');
  });
  it('finally, delete the language that it created', () => {
    return expect(txApi.languageDelete(slug, 'en'))
      .to.eventually.have.property('status', 204);
  });
});
