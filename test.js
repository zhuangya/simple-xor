/*eslint-env node, mocha */
'use strict';

let assert = require('assert');
let simpleXor = require('./');

describe('mocha', function () {
  it('should xor with correct result', function () {
    assert.equal(simpleXor('Hello', '-----key----'), 'eHAAB');
  });
});
