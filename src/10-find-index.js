/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  function searchIndex(start, end) {
    const middle = Math.floor((start + end) / 2);
    const midVal = array[middle];
    if (midVal !== value) {
      if (midVal > value) return searchIndex(0, middle);
      if (midVal < value) return searchIndex(middle, end);
    }
    return middle;
  }
  return searchIndex(0, array.length);
}

module.exports = findIndex;
