/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  // base case - array at index 0 is equal to target
  if (array[0] === target) {
    return true;
  }
  // base case - array has one or fewer elements left, but value at index 0 is not equal to target
  if (array.length <= 1) {
    return false;
  }
  // otherwise, return recursive call, removing first element and taking it out of target or not
  return subsetSum(array.slice(1), target - array[0]) || subsetSum(array.slice(1), target);
}

module.exports = subsetSum;

console.log('---TESTING subsetSum---');
console.log(`subsetSum([3, 7, 4, 2], 5): expect -> true: actual -> ${subsetSum([3, 7, 4, 2], 5)}`);
console.log(`subsetSum([3, 34, 4, 12, 5, 12], 32): expect -> true: actual -> ${subsetSum([3, 34, 4, 12, 5, 12], 32)}`);
console.log(`subsetSum([8, 2, 4, 12], 13): expect -> true: actual -> ${subsetSum([8, 2, 4, 12], 13)}`);
console.log(`subsetSum([8, -2, 1, -3], 6): expect -> true: actual -> ${subsetSum([8, -2, 1, -3], 6)}`);
