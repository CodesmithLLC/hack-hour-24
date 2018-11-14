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

  if (array.length === 0) return [0];

  const productArray = array.map((num, i) => {
    const valofI = array.splice(i, 1);
    const product = array.reduce((prod, num) => prod * num, 1);
    array.splice(i, 0, ...valofI);
    return product;
  });
  return productArray
}

module.exports = getAllProducts;

console.log(getAllProducts([1, 7, 3, 4]))