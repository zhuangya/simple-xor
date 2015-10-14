'use strict';

function chr (ord) {
  return String.fromCharCode(ord);
}

function ord (chr) {
  return chr.charCodeAt(0);
}

module.exports = function simpleXor (source, key) {
  let j = 0;
  let result = '';
  let ch = '';

  for (ch of source) {
    result += '' + chr(ord(ch) ^ ord(key[j++]));
    j = j % key.length;
  }

  return result;
};
