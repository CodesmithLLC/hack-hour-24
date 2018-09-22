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
  if (array.length === 0) {
    return [];
  }
  const lastElement = [array[array.length - 1]];
  return lastElement.concat(reverseInPlace(array.splice(0, array.length -1)));
}

module.exports = reverseInPlace;

const test = [5, 4, 3, 2, 1];

console.log(reverseInPlace(test));







/*
function reverseInPlace(array) {
  // define head and tail
  let head = 0;
  let tail = array.length - 1;
  // loop through array until head and tail meet
  while (head < tail) {
    // create temp reference to head value
    let temp = array[head];
    // swap head with tail and increment each
    array[head++] = array[tail];
    array[tail--] = temp;
  }
  return array;
}
*/