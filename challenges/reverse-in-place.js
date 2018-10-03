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
  //find midpoint of array
  const midpoint = Math.floor(array.length/2);

  //iterate through array until midpoint
  for(let i = 0; i < midpoint; i++) {

    //swap each array[i] value with the value that is the same distance from the end of the array as array[i] is from the begining
    let temp = array[i];
    array[i] = array[array.length-i-1]
    array[array.length-i-1] = temp;
  }
  return array
}
module.exports = reverseInPlace;
