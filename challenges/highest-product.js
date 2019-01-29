/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */


function highestProduct(array) {
  array.sort((a, b) => a - b);
  const lowNums = array.slice(0, 2);
  const highNums = array.slice(array.length - 3);
  const result1 = lowNums.reduce((acc, cur) => acc * cur, highNums[2]);
  const result2 = highNums.reduce((acc, cur) => acc * cur);
  return Math.max(result1, result2);
}


module.exports = highestProduct;
