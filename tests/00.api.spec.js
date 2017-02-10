window.Promise = require('bluebird');
window.chai.use(require('chai-as-promised'));
import TransifexApi from '../src/index.js';
let env = window.__env__;
window.txApi = TransifexApi({
  username: env.username,
  password: env.password,
  base_url: env.tx_host,
});
window.slug = 'project' + require('shortid').generate();

describe('A Transifex Api class ', () => {
  it('should exist ', () => {
    expect(txApi).to.not.be.undefined;
  });
});
