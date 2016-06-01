import TransifexApi from '../src/transifex-api.js';
import chai from 'chai';
let expect = chai.expect;

var txApi = TransifexApi.connect({
  username: 'alexapi1',
  password: 'alexapi1',
});

describe('Language mixin', () => {
  it('Given that a project named autotest exists', (done) => {
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

  it('should be able to add the english target language', (done) => {
    txApi.languageCreate('autotest', {
      language_code: 'en',
      coordinators: [
        'alexapi1'
      ]
    })
    .then((data) => {
      expect(data.statusCode).to.equal(201);
      done();
    })
  });

  it('update the list field', (done) => {
    txApi.languageUpdate('autotest', 'en', {
      list: 'mylist@listserver.com',
      coordinators: [
        'alexapi1'
      ]
    })
    .then((data) => {
      expect(data.statusCode).to.equal(200);
      done();
    })
  });

  it('retrieve the updated language', (done) => {
    txApi.languageRead('autotest', 'en')
    .then((data) => {
      expect(data.statusCode).to.equal(200);
      done();
    })
  });

  it('and retrieve all languages', (done) => {
    txApi.languages('autotest')
    .then((data) => {
      expect(data.statusCode).to.equal(200);
      console.log(data.body)
      expect(data.body[0].language_code).to.equal('en');
      done();
    })
  });


  it('should be able to delete the language that it created', (done) => {
    txApi.languageDelete('autotest', 'en')
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
