/*  Given an array of numbers and a target number, return true if there are two numbers in
 *  the array that sum up to the target value; return false otherwise
 */

function twoSum(arr, target) {
  // Edge Case: Array has less than two elements
  if (arr.length < 2) return false;
  // If array has two or more elements, create a store and a found flag
  const store = {};
  let found = false;
  // Loop through the array, storing the difference between each number and the target in store
  arr.forEach((num) => {
    // Check if the number is already in the store - if so, set found to true and return
    if (store[num]) {
      found = true;
      return true;
    }
    // Otherwise put the difference between that number and the target into the store
    store[target - num] = true;
  });
  return found;
}

module.exports = twoSum;

// console.log('---TESTING romanNumeral---');
// console.log(`twoSum([5], 5): expect -> false: actual -> ${twoSum([5], 5)}`);
// console.log(`twoSum([5, 5], 5): expect -> false: actual -> ${twoSum([5, 5], 5)}`);
// console.log(`twoSum([2, 3], 5): expect -> true: actual -> ${twoSum([2, 3], 5)}`);
// console.log(`twoSum([1, 2, 3], 6): expect -> false: actual -> ${twoSum([1, 2, 3], 6)}`);
// console.log(`twoSum([1, 2, 3, 4], 6): expect -> true: actual -> ${twoSum([1, 2, 3, 4], 6)}`);
