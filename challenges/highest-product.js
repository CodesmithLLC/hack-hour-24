/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// Iterate through the array and if the element is negative, then store it to another array

function highestProduct(array) {
  const posArray = array.filter(element => element > 0);
  const negArray = array.filter(element => element < 0);
  // console.log(posArray);
  // console.log(negArray);

  let resultNegArray;
  if (negArray.length === 2) {
    resultNegArray = negArray.reduce((acc, curr) => acc * curr);
    console.log(resultNegArray);
  }
  const resultPosArray = posArray.reduce((acc, curr) => acc * curr);

  return resultPosArray * resultNegArray;
}

highestProduct([-1, -3, 1]);

module.exports = highestProduct;
