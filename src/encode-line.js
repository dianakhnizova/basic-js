const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let str2 = '';
  let count = 1;
  for(let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i+1]) {
      count += 1;
    } else {
      str2 += count > 1 ? count + str[i] : str[i];
      count = 1;
    }
  }
  return str2;
}

module.exports = {
  encodeLine
};
