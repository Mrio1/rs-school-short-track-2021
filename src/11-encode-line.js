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
  let curLet = str[0] || '';
  let counter = 0;
  const retArr = [];
  [...str].forEach((item) => {
    if (item === curLet) {
      counter++;
    } else {
      retArr.push(counter !== 1 ? `${counter}${curLet}` : `${curLet}`);
      curLet = item;
      counter = 1;
    }
  });
  retArr.push(counter > 1 ? `${counter}${curLet}` : `${curLet}`);
  return retArr.join('');
}

module.exports = encodeLine;
