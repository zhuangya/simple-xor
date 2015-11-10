/*eslint-env node, mocha */
'use strict';

var assert = require('assert');
var simpleXor = require('./');

describe('mocha', function () {
  it('should xor with correct result', function () {
    assert.equal(simpleXor('Hello', '-----key----'), 'eHAAB');
  });
});
