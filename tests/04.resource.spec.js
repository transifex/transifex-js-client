describe('Resource mixin should', () => {
  it('upload a resource to the project', () => {
    return expect(txApi.resourceCreate(slug, {
      slug: 'resourcetest',
      name: 'resourcetest',
      i18n_type: 'KEYVALUEJSON',
      content: JSON.stringify({"hello world": "hello world"}),
    })).to.eventually.have.property('statusCode', 201)
  });
  it('update the resource', () => {
    return expect(txApi.resourceUpdate(slug, 'resourcetest', {
      name: 'updatedresourcetest',
    })).to.eventually.have.property('statusCode', 200)
  });
  it('retrieve the updated resource', () => {
    return expect(txApi.resourceRead(slug, 'resourcetest'))
      .to.eventually.have.deep.property('body.name', 'updatedresourcetest')
  });
  it('and retrieve all resources', () => {
    return expect(txApi.resources(slug))
      .to.eventually.have.property('body').with.length.above(0)
  });
});
