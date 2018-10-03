/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  // Edge case - Empty Array => return 0
  if (!array.length) return 0;
  // Edge case - If array length is less than 4, return product of contained integers
  if (array.length < 4) {
    return array.reduce((a, b) => a * b);
  }
  // Sort array from highest to lowest
  array.sort((a, b) => b - a);
  // Calculate product of first three integers
  const productFirstThree = array[0] * array[1] * array[2];
  // Edge case - Calculate product of first integer and last two (if last two are negative);
  const productFirstAndLastTwo = array[0] * array[array.length - 1] * array[array.length - 2];
  // Return the largest of the two cases
  return Math.max(productFirstThree, productFirstAndLastTwo);
}

module.exports = highestProduct;

// console.log('---TESTING highestProduct---');
// console.log(`highestProduct([]): expect -> 0: actual -> ${highestProduct([])}`);
// console.log(`highestProduct([2]): expect -> 2: actual -> ${highestProduct([2])}`);
// console.log(`highestProduct([2, 4]): expect -> 8: actual -> ${highestProduct([2, 4])}`);
// console.log(`highestProduct([2, 4, 6]): expect -> 48: actual -> ${highestProduct([2, 4, 6])}`);
// console.log(`highestProduct([2, 4, 6, 8]): expect -> 192: actual -> ${highestProduct([2, 4, 6, 8])}`);
// console.log(`highestProduct([1, 9, 2, 8, 3, 7, 4, 6]): expect -> 504: actual -> ${highestProduct([1, 9, 2, 8, 3, 7, 4, 6])}`);
// console.log(`highestProduct([1, -9, 2, -8, 3, 7, 4, 6]): expect -> 504: actual -> ${highestProduct([1, -9, 2, -8, 3, 7, 4, 6])}`);
// console.log(`highestProduct([1, -9, 2, -8, 3, -7, 4, 6]): expect -> 432: actual -> ${highestProduct([1, -9, 2, -8, 3, -7, 4, 6])}`);
