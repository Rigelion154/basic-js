const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`)
  // if (arr.isArray)
  //   return Error("'arr' parameter must be an instance of the Array!");
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let dn = "--discard-next";
  let dp = "--discard-prev";
  let dbn = "--double-next";
  let dbp = "--double-prev";

  if (arr.includes(dn) && arr.includes(dbp)) {
    arr.splice(arr.indexOf(dn), 3);
  }
  if (arr.includes(dn) && arr.includes(dp)) {
    arr.splice(arr.indexOf(dn), 3);
  }
  // if (arr.includes(dbn) && arr.includes(dp)) {
  //   arr.splice(arr.indexOf(dbn), 3);
  // }

  if (arr.includes(dn)) {
    arr.splice(arr.indexOf(dn), 2);
  }
  if (arr.includes(dbn)) {
    let idbn = arr.indexOf(dbn);
    if (idbn === arr.length - 1) arr.splice(idbn, 1);
    else arr.splice(idbn, 1, arr[idbn + 1]);
  }
  if (arr.includes(dp)) {
    let idp = arr.indexOf(dp);
    if (idp === 0) arr.splice(0, 1);
    else arr.splice(idp - 1, 2);
  }

  if (arr.includes(dbp)) {
    let idbp = arr.indexOf(dbp);
    if (idbp === 0) arr.splice(0, 1);
    else arr.splice(idbp, 1, arr[idbp - 1]);
  }
  return arr;
}

// console.log(transform(3))

module.exports = {
  transform,
};
