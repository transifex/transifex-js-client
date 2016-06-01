import TransifexApi from '../src/transifex-api.js';
import chai from 'chai';
let expect = chai.expect;

var txApi = TransifexApi.connect({
  username: 'alexapi1',
  password: 'alexapi1',
});

describe('Resource mixin', () => {
  it('Given that a project named autotest exist', (done) => {
    txApi.projectCreate({
      name: 'autotest',
      slug: 'autotest',
      private: true,
      description: 'this is an automated test',
      source_language_code: 'af'
    })
    .then((data) => {
      expect(data.statusCode).to.equal(201);
      done();
    })
  });

  it('should be able to upload a resource to the project', (done) => {
    txApi.resourceCreate('autotest', {
      slug: 'resourcetest',
      name: 'resourcetest',
      i18n_type: 'KEYVALUEJSON',
      content: JSON.stringify({"hello world": "hello world"}),
    })
    .then((data) => {
      expect(data.statusCode).to.equal(201);
      done();
    })
  });

  it('should be able to update the resource', (done) => {
    txApi.resourceUpdate('autotest', 'resourcetest', {
      name: 'updatedresourcetest',
    })
    .then((data) => {
      expect(data.statusCode).to.equal(200);
      done();
    })
  });

  it('should be able to retrieve the updated name', (done) => {
    txApi.resourceRead('autotest', 'resourcetest')
    .then((data) => {
      expect(data.statusCode).to.equal(200);
      expect(data.body.name).to.equal('updatedresourcetest');
      done();
    })
  });

  it('and retrieve all resources', (done) => {
    txApi.resources('autotest')
    .then((data) => {
      expect(data.statusCode).to.equal(200);
      expect(data.body.length).to.equal(1);
      done();
    })
  });


  it('should be able to delete the resource that it uploaded', (done) => {
    txApi.resourceDelete('autotest', 'resourcetest')
    .then((data) => {
      expect(data.statusCode).to.equal(204);
      done();
    })
  });



  it('should be able to delete the project that it created', (done) => {
    txApi.projectDelete('autotest')
    .then((data) => {
      expect(data.statusCode).to.equal(204);
      done();
    })
  });

});
