/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let sortedArr = array.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  const highestCombinedProduct = sortedArr[sortedArr.length - 1] *
  sortedArr[sortedArr.length - 2] * sortedArr[sortedArr.length - 3];

  return highestCombinedProduct;
}
console.log(highestProduct([4,3,2,1])
)

module.exports = highestProduct;
