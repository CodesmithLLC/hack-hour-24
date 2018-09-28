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
  // [1,2,3,4,5] to [5,4,3,2,1]
  for (let i = 0; i < array.length; i++) {
  // when i = 0, insert 5 to 0 position, so 12345 is now 51234,
  // when i = 1, insert 4 to 1 position, so 51234 is now 54123 ....
    array.splice(i, 0, array.pop());
  }
  return array;
}
console.log(reverseInPlace([1,2,3,4,5]))
module.exports = reverseInPlace;
