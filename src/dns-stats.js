const { NotImplementedError } = require('../extensions/index.js');

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
  const static = {};
  for (let i = 0; i < domains.length; i += 1) {
     const domainParts = domains[i].split('.').reverse();
     let domainsStr = '';
     for (let j = 0; j < domainParts.length; j += 1) {
      domainsStr = `${domainsStr}.${domainParts[j]}`;
      static[domainsStr] = (static[domainsStr] || 0) + 1;
     }
  }
  return static;
}

module.exports = {
  getDNSStats
};
