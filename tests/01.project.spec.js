var payload = {
  name: slug,
  slug: slug,
  private: true,
  description: 'this is an automated test',
  source_language_code: 'af'
}

describe('Project mixin should', () => {
<<<<<<< 13899b641973da8a7c5c32f3155a624a776ce62f

  it('create a new project', () => {
    return expect(txApi.projectCreate(payload))
      .to.eventually.have.property('status', 201);
  });
  it('retrieve the list of all projects', () => {
    return expect(txApi.projects()).
      to.eventually.have.property('data').with.length.above(0)
      //Projects list length should not equal 0 because we added a project
  });
  it('not create a new project, if the slug already exists', () => {
    return expect(txApi.projectCreate(payload))
      .to.eventually.be.rejected;
  });
  it('update the description of an existing project', () => {
    return expect(txApi.projectUpdate( slug, {
      description: 'this is an updated description',
    })).to.eventually.have.property('status', 200);
  });
  it('retrieve the updated description of an existing project', () => {
    return expect(txApi.projectRead(slug))
      to.eventually.have.property('status', 200)
      .and.to.have.property('data.description', 'this is an updated description')
  });
  it('retrieve the list of all projects', () => {
    return expect(txApi.projects()).
      to.eventually.have.property('data').with.length.above(0)
      //Projects list length should not equal 0 because we added a project
  });
});
=======
  it('create a new project', () => {
    return expect(txApi.projectCreate(payload))
      .to.eventually.have.property('status', 201)
  })
  it('retrieve the list of all projects', () => {
    return expect(txApi.projects())
      .to.eventually.have.property('data').with.length.above(0)
       //Projects list length should not equal 0 because we added a project
  })
  it('not create a new project, if the slug already exists', () => {
    return expect(txApi.projectCreate(payload))
      .to.eventually.be.rejected
  })
  it('update the description of an existing project', () => {
    return expect(txApi.projectUpdate(slug, {
      description: 'this is an updated description'
    })).to.eventually.have.property('status', 200)
  })
  it('retrieve the updated description of an existing project', () => {
    return expect(txApi.project(slug))
    to.eventually.have.property('status', 200)
      .and.to.have.property('data.description', 'this is an updated description')
  })
  it('retrieve the list of all projects', () => {
    return expect(txApi.projects())
      .to.eventually.have.property('data').with.length.above(0)
      // Projects list length should not equal 0 because we added a project
  })
})
>>>>>>> Phew...
