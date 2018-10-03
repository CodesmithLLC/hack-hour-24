/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const sortedArr = array.sort((a, b) => a > b);
  const negatives = sortedArr[0] * sortedArr[1] * sortedArr[sortedArr.length - 1];
  const positives = sortedArr[sortedArr.length - 1] * sortedArr[sortedArr.length - 2] * sortedArr[sortedArr.length - 3];
  return positives > negatives ? positives : negatives;
}


module.exports = highestProduct;
