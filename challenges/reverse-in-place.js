// 'use strict';

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
// Unshift last element to the front of the array
// Pop off the last element
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i += 1) {
    // Start at 0, delete 0, put last element to the front
    array.splice(i, 0, array.pop());
  }
  // Return array
  return array;
}
const arr = [1, 2, 3, 4];
console.log(reverseInPlace(arr));
module.exports = reverseInPlace;
