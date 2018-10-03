/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  array.sort((a, b) => b - a);

  return array[0] * array[1] * array[2];
}

console.log(highestProduct([1, 2, 3, 4, 5, 6]));
module.exports = highestProduct;
