describe('Resource mixin should', () => {
  it('upload a resource to the project', () => {
    return expect(txApi.resourceCreate(slug, {
      slug: 'resourcetest',
      name: 'resourcetest',
      i18n_type: 'KEYVALUEJSON',
      content: JSON.stringify({"hello world": "hello world"}),
    })).to.eventually.have.property('status', 201)
  });
  it('update the resource', () => {
    return expect(txApi.resourceUpdate(slug, 'resourcetest', {
      name: 'updatedresourcetest',
    })).to.eventually.have.property('status', 200)
  });
  it('retrieve the updated resource', () => {
    return expect(txApi.resourceRead(slug, 'resourcetest'))
      .to.eventually.have.deep.property('data.name', 'updatedresourcetest')
  });
  it('and retrieve all resources', () => {
    return expect(txApi.resources(slug))
      .to.eventually.have.property('data').with.length.above(0)
  });
});
