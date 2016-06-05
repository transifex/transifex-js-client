/* eslint-disable */
global.chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
global.chai.use(chaiAsPromised);

global.expect = global.chai.expect;
