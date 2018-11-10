/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


const findInOrderedSet = (arr, target) => {
  // Edge Case: Array is empty or single-item that doesn't match target
  if (!arr.length || (arr.length === 1 && arr[0] !== target)) return false;
  // Set placehodlers for array range under consideration
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    // Find the midpoint of the array (round down)
    const midPoint = Math.floor((start - end) / 2);
    // Check if this midpoint is the target - if so, return true
    if (arr[midPoint + start] === target) return true;
    // If the midpoint is higher than target, shift the end to the midPoint
    if (arr[midPoint] > target) end = midPoint - 1;
    // If the midpoint is lower than target, recursively call on the subset above the midpoint
    else start = midPoint + 1;
  }
  return false;
};

module.exports = findInOrderedSet;

// console.log('---TESTING findInOrderedSet---');
// console.log(`findInOrderedSet([], 5): expect -> false: actual -> ${findInOrderedSet([], 5)}`);
// console.log(`findInOrderedSet([3], 5): expect -> false: actual -> ${findInOrderedSet([3], 5)}`);
// console.log(`findInOrderedSet([7], 5): expect -> false: actual -> ${findInOrderedSet([7], 5)}`);
// console.log(`findInOrderedSet([5], 5): expect -> true: actual -> ${findInOrderedSet([5], 5)}`);
// console.log(`findInOrderedSet([1, 2, 3, 4, 5], 1): expect -> true: actual -> ${findInOrderedSet([1, 2, 3, 4, 5], 1)}`);
// console.log(`findInOrderedSet([1, 2, 3, 4, 5], 5): expect -> true: actual -> ${findInOrderedSet([1, 2, 3, 4, 5], 5)}`);
