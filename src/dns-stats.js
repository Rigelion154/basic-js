const {NotImplementedError} = require('../extensions/index.js');

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
function getDNSStats(/*domains*/) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
//     const result = []
//     for (let i = 0; i<domains.length; i++) {
//         domains[i].split()
//     }
//     // domains.forEach(domain => {
//     //
//     //     result.push(domain.split('.'))
//     // })
//     // result.forEach(elem => {
//     //     console.log(elem.pop())
//     // })
//     return result
// }

// let arr = [1, 3, 4, 1, 1, 3, 4, 5];
// let count = {};
//
// for (let elem of arr) {
//     if (count[elem] === undefined) {
//         count[elem] = 1;
//     } else {
//         count[elem]++;
//     }
}

// console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']))

// getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']) => {'.ru': 3, '.ru.yandex': 3, '.ru.yandex.code': 1,'.ru.yandex.music': 1}


module.exports = {
    getDNSStats
};
