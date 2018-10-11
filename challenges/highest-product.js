/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  return Array.from(array).sort().reverse().splice(0, 3)
    .reduce((acc, curr) => acc * curr);
}

console.log(highestProduct([1, 2, 4, 3, -5]));

module.exports = highestProduct;
