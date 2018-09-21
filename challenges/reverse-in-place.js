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
  let numberOfIterations = Math.floor(array.length/2);
  let temp;
  for (let x=0, i=array.length-1; x<numberOfIterations; x++, i--) {
    temp = array[x];
    array[x] = array[i];
    array[i] = temp;
  }
  return array;
}

console.log(reverseInPlace([1,2,3,4,5,6,7,8,9,10,11,12,13]))

module.exports = reverseInPlace;
