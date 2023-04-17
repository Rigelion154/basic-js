const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    let result = ''
    let arr = []
    let arr1 = []

    if (options.separator && options.repeatTimes && options.addition && options.additionRepeatTimes) {
        arr.push(str, options.separator, options.addition)
    }

    if (options.separator && options.repeatTimes) {
        arr.push(str, options.separator)
        for (let i = 0; i < options.repeatTimes; i++) {
            arr.forEach(el => {
                arr1.push(el)
            })
        }
        arr1.pop()
    } else if (options.repeatTimes) {
        for (let i = 0; i < options.repeatTimes; i++) {
            arr1.push(str, "+")
        }
        arr1.pop()
    }


    return arr1.join('')

}

// console.log(repeater('la', { repeatTimes: 3, separator: 's' }))


module.exports = {
    repeater
};
