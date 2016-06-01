import TransifexApi from '../src/transifex-api.js';
import chai from 'chai';
let expect = chai.expect;

var txApi = TransifexApi.connect({
  username: 'alexapi1',
  password: 'alexapi1',
});

describe('Api class', () => {
  it('An api class should exist ', () => {
    expect(txApi).to.not.be.undefined;
  });
});
