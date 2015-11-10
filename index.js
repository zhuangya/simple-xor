'use strict';

function chr (ord) {
  return String.fromCharCode(ord);
}

function ord (chr) {
  return chr.charCodeAt(0);
}

module.exports = function simpleXor (source, key) {
  var j = 0;
  var result = '';
  var ch = '';

  for (var i = 0; i < source.length; i++) {
    result += '' + chr(ord(source[i]) ^ ord(key[j++]));
    j = j % key.length;
  }

  return result;
};
