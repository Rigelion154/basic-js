const {NotImplementedError} = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
    function isEmpty(str) {
        return str.trim() == '';


    }

    if (typeof sampleActivity === 'string'
        && typeof Number(sampleActivity) === 'number'
        && !isNaN(sampleActivity) && sampleActivity
        && !isEmpty(sampleActivity)
        && Number(sampleActivity) <= 15
        && Number(sampleActivity) > 0) {

        const k = 0.693 / HALF_LIFE_PERIOD
        const result = Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / k
        return (Math.ceil(result))
    } else return false

}


module.exports = {
    dateSample
};
