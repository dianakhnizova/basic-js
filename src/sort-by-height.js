const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const matrix = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      matrix.push(arr[i]);
    }
  }
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length - i - 1; j += 1) {
      if (matrix[j] > matrix[j+1]) {
        const temp = matrix[j];
        matrix[j] = matrix[j+1];
        matrix[j+1] = temp;
      }
    }
  }
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = matrix[index];
      index++;
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
