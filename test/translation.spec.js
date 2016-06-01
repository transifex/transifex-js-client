import TransifexApi from '../src/transifex-api.js';
import chai from 'chai';
let expect = chai.expect;

var txApi = TransifexApi.connect({
  username: 'alexapi1',
  password: 'alexapi1',
});

describe('Translation mixin', () => {
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

  it('should be able to retrieve the translations for english', (done) => {
    txApi.translationRead('autotest', 'resourcetest', 'en')
    .then((data) => {
      expect(data.statusCode).to.equal(200);
      done();
    })
  });

  it('should be able to update the translations for english', (done) => {
    txApi.translationUpdate('autotest', 'resourcetest', 'en', {
      'hello world': 'derp'
    })
    .then((data) => {
      expect(data.statusCode).to.equal(200);
      done();
    })
  });

  it('should be able to retrieve the translations for english', (done) => {
    txApi.translationRead('autotest', 'resourcetest', 'en')
    .then((data) => {
      expect(data.statusCode).to.equal(200);
      expect(data.body.content['hello world']).to.equal('derp');
      done();
    })
  });

  it('should fail for  translations in nonexisting resources', (done) => {
    txApi.translationRead('autotest', 'notexisting', 'fr')
    .then((data) => {
      done();
    }, (err) => {
      expect(err.status).to.equal(404);
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
