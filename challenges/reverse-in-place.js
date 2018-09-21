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
    var temp;
    let mid = Math.floor(array.length / 2);
    for (let left = 0; left < mid; left++) {
        let right = array.length - left - 1;
        temp = array[left];
        array[left] = array[right];
        array[right] = temp;
    }
    return array;
}
console.log(reverseInPlace([1, 5, 3]));
module.exports = reverseInPlace;
