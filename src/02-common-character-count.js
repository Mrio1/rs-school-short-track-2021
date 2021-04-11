/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let [str1, str2] = [s1, s2];
  let common = 0;
  for (let i = 0; i < str1.length; i++) {
    const s2Index = str2.indexOf(str1[i]);
    if (s2Index >= 0) {
      str1 = str1.replace(str1[i], '');
      str2 = str2.replace(str2[s2Index], '');
      i--;
      common++;
    }
  }
  return common;
}

module.exports = getCommonCharacterCount;
