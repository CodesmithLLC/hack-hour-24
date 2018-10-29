/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array)) return 0;
  if (array.length < 3) return 0;

  const sortedArray = array.sort((a, b) => a - b);

  // if two neg numbers exist, find product
  const firstTwoNumsProduct = sortedArray.slice(0, 2).reduce((prod, num) => prod * num);

  // find the product of the third and second last numbers
  const thirdAndSecondLastNumsProduct = sortedArray.slice(-3, -1).reduce((prod, num) => prod * num);

  // check if their product is > product of 3rd to last and 2nd to last numbers (positive)
  if (firstTwoNumsProduct > thirdAndSecondLastNumsProduct) {
    // if true, return product of greatest two neg numbers and highest pos number
    return firstTwoNumsProduct * sortedArray.slice(-1);
  }
  // if false, return product of greatest three pos numbers
  return thirdAndSecondLastNumsProduct * sortedArray.slice(-1);
}

module.exports = highestProduct;
