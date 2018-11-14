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
  // EDGE CASES - Array is empty or has only one item
  if (!array.length) return [0];
  if (array.length === 1) return array;
  // Declare an arry to hold unique products and a set to cache array permutations and all products
  const productsArray = [];
  const productsSet = new Set();
  for (let i = 0; i < array.length; i += 1) {
    // Iterate through your array, slicing out the index
    const newArray = array.slice(0, i).concat(array.slice(i + 1));
    if (!productsSet.has(newArray)) {
      // If that array permutaiton isn't already cached, add to cache and find the product
      // productsSet.add(newArray);
      const product = newArray.reduce((acc, cur) => acc * cur);
      if (!productsSet.has(product)) {
        // If that product isn't already cached, add to cache and output array
        // productsSet.add(product);
        productsArray.push(product);
      }
    }
  }
  return productsArray;
}

module.exports = getAllProducts;

// console.log('---TESTING gcd---');
// console.log(`getAllProducts([]): expect -> [0]: actual -> [${getAllProducts([])}]`);
// console.log(`getAllProducts([5]): expect -> [5]: actual -> [${getAllProducts([5])}]`);
// console.log(`getAllProducts([1, 7, 3, 4]): expect -> [84, 12, 28, 21]: actual -> [${getAllProducts([1, 7, 3, 4])}]`);
// console.log(`getAllProducts([2, 2, 2, 2]): expect -> [8]: actual -> [${getAllProducts([2, 2, 2, 2])}]`);
