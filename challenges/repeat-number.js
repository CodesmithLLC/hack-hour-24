/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  let output = {};
  for (let i = 0; i < array.length; i += 1) {
    if (output.hasOwnProperty(String(array[i]))) {
      output[array[i]] += 1;
    }
    else {
      output[array[i]] = 1;
    }
  }
  for (let key in output) {
    if(output[key] === 2) return key;
  }
}

let testArr = [1,2,3,4,5,6,7,8,9,8, 10];

console.log(repeatNumbers(testArr));

module.exports = repeatNumbers;
