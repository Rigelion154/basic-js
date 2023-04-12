const {NotImplementedError} = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
    const conditionOne = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F']
    const result = n.split('-')
    let result2 = result.map(el => el.split(''))
    for (let i = 0; i < result2.length; i++) {
        for (let j = 0; j < result2[i].length; j++) {
            if (!conditionOne.includes(result2[i][j])) return false
            else return true
        }
    }

}

// console.log(isMAC48Address('00-1B-63-84-45-E6'))
module.exports = {
    isMAC48Address
};
