/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  let curStr = '';
  domains.forEach((domain) => {
    curStr = '';
    const domainItems = domain.split('.').reverse();
    domainItems.forEach((item) => {
      curStr += `.${item}`;
      if ({}.hasOwnProperty.call(obj, curStr)) {
        obj[curStr]++;
      } else {
        obj[curStr] = 1;
      }
    });
  });
  return obj;
}

module.exports = getDNSStats;
