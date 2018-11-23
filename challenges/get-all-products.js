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
  // const sortedArr = array.sort((a, b) => a - b);
  // const products = [];

  if (array.length === 0) {
    return [0];
  }

  // (function computeProducts(curArr, sortedArr) {
  //   if (curArr.length === array.length - 1) {
  //     products.push(curArr.reduce((acc, val) => acc * val));
  //     return;
  //   }
  //   if (sortedArr.length === 0) {
  //     return;
  //   }

  //   computeProducts(curArr.concat([sortedArr[0]]), sortedArr.slice(1));
  //   computeProducts(curArr, sortedArr.slice(1));
  // }([], sortedArr));

  // return products;

  // Three cases, no 0's, 1 0's, 2 or more 0's.
  let zeroCount = 0;
  let zeroPosition;
  let product = 1;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 0) {
      zeroCount += 1;
      zeroPosition = i;
    } else {
      product *= array[i];
    }
  }

  const products = Array(array.length).fill(0);

  if (zeroCount === 1) {
    products[zeroPosition] = product;
  } else if (zeroCount === 0) {
    return array.map(v => product / v);
  }

  return products;
}

// console.log(getAllProducts([1, 7, 3, 4]));
// console.log(getAllProducts([1, 0, 3, 4]));
// console.log(getAllProducts([1, 0, 0, 4]));

module.exports = getAllProducts;
