const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    if (!arr) arr = [-1]
    let res = []
    let res2 = arr
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== -1) res.push(arr[i])
    }

    res.sort((a, b) => a - b)

    let index = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === -1) res2[i] = -1

        else {
            res2[i] = res[index]
            index++
        }
    }
    return res2
}




module.exports = {
    sortByHeight
};
