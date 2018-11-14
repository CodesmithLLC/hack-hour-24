/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  const sortedArr = array.sort((a, b) => a - b);
  const products = [];

  (function computeProducts(curArr, sortedArr) {
    if (curArr.length === array.length - 1) {
      products.push(curArr.reduce((acc, val) => acc * val));
      return;
    }
    if (sortedArr.length === 0) {
      return;
    }

    computeProducts(curArr.concat([sortedArr[0]]), sortedArr.slice(1));
    computeProducts(curArr, sortedArr.slice(1));
  }([], sortedArr));

  return products;
}

// console.log(getAllProducts([1, 7, 3, 4]));

module.exports = getAllProducts;
