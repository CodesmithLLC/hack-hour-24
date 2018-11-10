/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target, start = 0, end = arr.length - 1) {
  if (target < arr[start]) return false;
  if (target > arr[end]) return false;
  const middle = Math.floor((start + end) / 2);
  if (target === arr[middle]) return true;
  if (target > arr[middle]) {
    return findInOrderedSet(arr, target, middle + 1, end);
  }
  if (target < arr[middle]) {
    return findInOrderedSet(arr, target, start, middle - 1);
  }
}
// console.log(findInOrderedSet([1, 4, 6, 8, 9], 7));

module.exports = findInOrderedSet;
