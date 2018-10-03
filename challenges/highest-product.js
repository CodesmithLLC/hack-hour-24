/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const sort = array.sort();
  return sort[sort.length-1] * sort[sort.length-2] * sort[sort.length-3];
}

console.log(highestProduct([2,5,4,7]))
module.exports = highestProduct;
