describe('ResourceString mixin should', () => {
  it('update the source string hello world', () => {
    return expect(txApi.resourceStringUpdate(slug, 'resourcetest', 'hello world', {
      comment: 'This is a comment'
    })).to.eventually.have.property('statusCode', 200)
  });
  it('retrieve the updated source string', () => {
    return expect(txApi.resourceStringRead(slug, 'resourcetest', 'hello world'))
      .to.eventually.have.deep.property('body.comment', 'This is a comment')
  });
});
