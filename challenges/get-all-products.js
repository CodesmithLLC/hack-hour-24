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
  // keep track of how many zeroes we encounter, and the accumulated product
  let totalZeroes = 0, prod = 1;
  // if a zero is in the array, where is it? keep track with zeroIndex
  let zeroIndex;
  // loop through our array
  for (let i = 0; i < array.length; i += 1) {
    const num = array[i];
    // if we encounter zero, increment zero count and track zero index
    if (num === 0) {
      zeroCount++;
      zeroIndex = i;
      // if zeroCount becomes two, break out of for loop
      if (zeroCount === 2) break;
    }
    // else if nonzero, include in product
    else {
      prod *= num;
    }
  }
  // how many zeroes did we find?
  // no element is zero, we are free to use division!
  if (zeroCount === 0) {
    return array.map(ele => prod / ele);
  }
  // only one element is zero, our results will have
  // all zeroes except for one point
  else if (zeroCount === 1) {
    const results = new Array(array.length).fill(0);
    // fill in the one point's value

    results[zeroIndex] = prod;
    return results;
  }
  // two elements or more are zero, our results will have
  // all zeroes only
  else {
    return new Array(array.length).fill(0);
  }
}

module.exports = getAllProducts;
