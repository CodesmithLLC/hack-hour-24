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
  let result = [];
  let pass1 = 1;
  let pass2 = 1;
  if (array.length === 0) return;
  for (let i = 0; i < array.length; i += 1) {
    result[i] = pass1;
    pass1 *= array[i];
  }
  for (let i = array.length -1; i >= 0; i -= 1) {
    result[i] *= pass2;
    pass2 *= array[i];
  }
  return result;
}

test = [1,7,3,4,5,9];
console.log(getAllProducts(test));

module.exports = getAllProducts;
