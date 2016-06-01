import TransifexApi from '../src/transifex-api.js';
import chai from 'chai';
let expect = chai.expect;

var txApi = TransifexApi.connect({
  username: 'alexapi1',
  password: 'alexapi1',
});

describe('Project mixin', () => {
  it('should be able to create a new project', (done) => {
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

  it('should be able to update the description of the project', (done) => {
    txApi.projectUpdate('autotest', {
      description: 'this is an updated description',
    })
    .then((data) => {
      expect(data.statusCode).to.equal(200);
      done();
    })
  });

  it('should be able to retrieve the updated description', (done) => {
    txApi.projectRead('autotest')
    .then((data) => {
      expect(data.statusCode).to.equal(200);
      expect(data.body.description).to.equal('this is an updated description');
      done();
    })
  });

  it('should be able to retrieve the list of projects', (done) => {
    txApi.projects()
    .then((data) => {
      expect(data.statusCode).to.equal(200);
      expect(data.body.length).to.not.equal(1);
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
