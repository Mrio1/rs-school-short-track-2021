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
  const numArr = [];
  const numInString = n.toString();
  for (let i = 0; i < numInString.length; i++) {
    const newNum = numInString.slice(0, i).concat(numInString.slice(i + 1));
    numArr.push(Number(newNum));
  }
  return Math.max(...numArr);
}

module.exports = deleteDigit;
