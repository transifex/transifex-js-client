import TransifexApi from '../src/transifex-api.js';
import chai from 'chai';
let expect = chai.expect;

var txApi = TransifexApi.connect({
  username: 'alexapi1',
  password: 'alexapi1',
});

describe('ResourceString mixin', () => {
  it('Given that a project named autotest', (done) => {
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

  it('and a resource named resourcetest exist', (done) => {
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

  it('should be able to update the source string hello world', (done) => {
    txApi.resourceStringUpdate('autotest', 'resourcetest', 'hello world', {
      comment: 'This is a comment'
    })
    .then((data) => {
      expect(data.statusCode).to.equal(200);
      done();
    })
  });

  it('should be able to retrieve the updated source string', (done) => {
    txApi.resourceStringRead('autotest', 'resourcetest', 'hello world')
    .then((data) => {
      expect(data.statusCode).to.equal(200);
      expect(data.body.comment).to.equal('This is a comment');
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
