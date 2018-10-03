/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  array.sort((a, b) => b - a);
  console.log(array);
  const max1 = array[0] * array[1] * array[2];
  const max2 = array[0] * array[array.length - 1] * array[array.length - 2];
  return Math.max(max1, max2);
}
const testArr = [-7, -1, -4, 15, -2, 29, -23, -15];
console.log(highestProduct(testArr));

module.exports = highestProduct;
