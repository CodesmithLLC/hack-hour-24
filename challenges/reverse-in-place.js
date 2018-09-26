'use strict';

/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
  // Handle edge case - empty or short array
  if (array.length < 2) {
    return array;
  }
  // If array is long, remove and cache the first and last element
  const startCache = array.shift();
  const endCache = array.pop();
  // Recursively call reverseInPlace on the remaining inner array
  array = reverseInPlace(array);
  // Unshift/Push the cached valeus on the return array in reverse order and return
  array.push(startCache);
  array.unshift(endCache);
  return array;
}

// console.log('---TESTING reverseInPlace---');
// console.log(reverseInPlace([]));
// console.log(reverseInPlace([5]));
// console.log(reverseInPlace([1, 2]));
// console.log(reverseInPlace([1, 2, 3]));
// console.log(reverseInPlace([1, 2, 3, 4]));
// console.log(reverseInPlace([1, 2, 3, 4, 5]));

module.exports = reverseInPlace;
