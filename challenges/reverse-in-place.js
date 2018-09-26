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
  for (let i = array.length - 1; i >= Math.floor(array.length / 2); i -= 1) {
    const moveSpot = Math.abs(i - (array.length-1));
    const temp = array[moveSpot];
    array[moveSpot] = array[i];
    array[i] = temp;
  }    
}

let testA = ['a', 'b', 'd', 'e', 'c', 'f', 'h', 'z'];
reverseInPlace(testA);
console.log(testA);
module.exports = reverseInPlace;
