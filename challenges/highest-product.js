/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */


function highestProduct(array) {
  array.sort((a, b) => b - a);
  const slicedArr = array.slice(0, 3);
  let result = slicedArr.shift();
  for (let i = 0; i < slicedArr.length; i += 1) {
    if (slicedArr[i] > 0) {
      result *= slicedArr[i];
    }
  }
  return result;
}

module.exports = highestProduct;
