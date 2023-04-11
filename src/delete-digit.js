const {NotImplementedError} = require('../extensions/index.js');

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
    const arrayFromDigit = Array.from(String(n))
    const resultArray = []
    const digitsArray = []

    for (let i = 0; i < arrayFromDigit.length; i++) {
        let array = Array.from(String(n))
        delete array[i]
        resultArray.push(array)
    }

    resultArray.forEach(arr => {
        digitsArray.push(arr.reduce((acc, number) => acc + number))
    })
    const maxDigit = digitsArray.reduce((acc, number) => number > acc ? number : acc)

    return Number(maxDigit)

}

console.log(deleteDigit(152))


module.exports = {
    deleteDigit
};
