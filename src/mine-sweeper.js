const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length; 
  const cols = matrix[0].length;  
  const arr = [];
  for (let row = 0; row < rows; row++) {
    const newRow = [];
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === true) {  
        newRow.push(1);  
      } else {
        let mineCount = 0; 

        if (row > 0 && matrix[row - 1][col]) mineCount++; 
        if (row < rows - 1 && matrix[row + 1][col]) mineCount++;
        if (col > 0 && matrix[row][col - 1]) mineCount++; 
        if (col < cols - 1 && matrix[row][col + 1]) mineCount++; 
        if (row > 0 && col > 0 && matrix[row - 1][col - 1]) mineCount++; 
        if (row > 0 && col < cols - 1 && matrix[row - 1][col + 1]) mineCount++; 
        if (row < rows - 1 && col > 0 && matrix[row + 1][col - 1]) mineCount++;
        if (row < rows - 1 && col < cols - 1 && matrix[row + 1][col + 1]) mineCount++; 

        newRow.push(mineCount);
      }
    }
    arr.push(newRow);
  }

  return arr;  
}

module.exports = {
  minesweeper
};
