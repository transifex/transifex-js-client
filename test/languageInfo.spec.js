import TransifexApi from '../src/transifex-api.js';
import chai from 'chai';
let expect = chai.expect;

var txApi = TransifexApi.connect({
  username: 'alexapi1',
  password: 'alexapi1',
});

describe('LanguageInfo mixin', () => {

  it('should be able to retrieve the list of all supported languages', (done) => {
    txApi.languagesInfo()
    .then((data) => {
      expect(data.statusCode).to.equal(200);
      expect(data.body.length).to.be.above(10);
      done();
    })
  });

  it('should be able to retrieve the info for a specific language', (done) => {
    txApi.languageInfo('pt_BR')
    .then((data) => {
      expect(data.statusCode).to.equal(200);
      expect(data.body.name).to.equal('Portuguese (Brazil)');
      done();
    })
  });

})
