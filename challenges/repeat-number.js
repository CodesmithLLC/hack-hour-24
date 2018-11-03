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

// function repeatNumbers(array) {
//   const numSet = new Set();
//   for (let i = 0; i < array.length; i += 1) {
//     if (numSet.has(array[i])) return array[i];
//     numSet.add(array[i]);
//   }
//   return false;
// }

// Strategy: Turn the number at array[array[i]] to a string
// If it's already a string, the number must be a duplicate, return it
function repeatNumbers(array) {
  for (let i = 0; i < array.length; i += 1) {
    // Check if the number at the array[i] is a string
    if (typeof array[Number(array[i])] === 'string') return Number(array[i]);
    array[Number(array[i])] = String(array[Number(array[i])]);
  }
  return false;
}

module.exports = repeatNumbers;

// console.log('---TESTING repeatNumbers---');
// console.log(`repeatNumbers([1, 2, 3, 3, 4, 5]): expect -> 3: actual -> ${repeatNumbers([1, 2, 3, 3, 4, 5])}`);
// console.log(`repeatNumbers([1, 2, 3, 4, 5, 1]): expect -> 1: actual -> ${repeatNumbers([1, 2, 3, 4, 5, 1])}`);
