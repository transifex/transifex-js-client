import TransifexApi from '../src/transifex-api.js';
import chai from 'chai';
let expect = chai.expect;

var txApi = TransifexApi.connect({
  username: 'alexapi1',
  password: 'alexapi1',
});

describe('TranslationString mixin', () => {
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

  it('a resource named resourcetest exist', (done) => {
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



  it('with english as a target language', (done) => {
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

  it('should be able to retrieve the translations strings list for english', (done) => {
    txApi.translationStrings('autotest', 'resourcetest', 'en')
    .then((data) => {
      expect(data.statusCode).to.equal(200);
      expect(data.body[0].translation.length).to.equal(0);
      done();
    })
  });


  it('should be able to retrieve a specific translation string list for english', (done) => {
    txApi.translationStringRead('autotest', 'resourcetest', 'en', 'hello world')
    .then((data) => {
      expect(data.statusCode).to.equal(200);
      expect(data.body.translation.length).to.equal(0);
      done();
    })
  });

  it('should be able to update a specific translation string list for english', (done) => {
    txApi.translationStringUpdate('autotest', 'resourcetest', 'en', 'hello world', {
      translation: 'Hello'
    })
    .then((data) => {
      expect(data.statusCode).to.equal(200);
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
