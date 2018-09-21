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
    //create a var and set it to an empty array
    let finalArr = [];
    // loop in side the arry with a for loop to access each ele
    for (let i = array.length-1;  i >= 0;  i -= 1) {
     // in the loop access the ele from the least to the first and push into empty array
        finalArr.push(array[i])
    }
    

    return finalArr;

}



module.exports = reverseInPlace;
