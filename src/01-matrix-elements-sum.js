/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = matrix[0].reduce((acum, cur) => acum + cur, 0);
  for (let i = 1; i < matrix.length; i++) {
    let rowSum = 0;
    matrix[i].forEach((value, j) => {
      rowSum += (matrix[i - 1][j] !== 0) ? value : 0;
    });
    sum += rowSum;
  }
  return sum;
}

module.exports = getMatrixElementsSum;
