const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  let max = -Infinity;
  for (let i = 0; i <str.length; i += 1) {
    let str2 = '';
    for (let j = 0; j < str.length; j += 1) {
      if (j !== i) {  
        str2 += str[j]; 
      }
    }

    let num = Number(str2);  
    if (num > max) {
      max = num; 
    }
  }
  return max; 
}

module.exports = {
  deleteDigit
};
