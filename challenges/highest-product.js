/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */


function highestProduct(array) {
  array.sort((a, b) => b - a);
  const slicedArr = array.slice(0, 3);
  let result = slicedArr.shift();
  for (let i = 0; i < slicedArr.length; i += 1) {
    if (slicedArr[i] >= 1) {
      result *= slicedArr[i];
    }
  }
  return result;
}

//console.log(highestProduct([2, 3, 4, 5, 6, 7]));

module.exports = highestProduct;
