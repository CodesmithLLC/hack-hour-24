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

function reverseInPlace(array, recursions = 0) {
  if(array.length === 1 || recursions === array.length){
    return array;
  } else {
    array.splice(recursions, 0, array[array.length -1])
    array.pop();
    return reverseInPlace(array, recursions + 1)
  }
}

let arr = [1,2,3,4,5]
console.log(reverseInPlace(arr));

module.exports = reverseInPlace;
