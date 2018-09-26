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

function reverseInPlace(array, index = 0) {
  if (index === array.length - 1) {
    return array;
  }
  const letterSwap = array.pop();
  array.splice(index, 0, letterSwap);
  return reverseInPlace(array, index + 1);
}

function reverseInPlaceByLoop(array) {
  for(let i = 0; i < array.length; i++) {
    const letterSwap = array.pop();
    array.splice(i, 0, letterSwap);
  }
  return array;
}
console.log(reverseInPlace(['h', 'e', 'l', 'l', 'o']));
module.exports = reverseInPlace;
