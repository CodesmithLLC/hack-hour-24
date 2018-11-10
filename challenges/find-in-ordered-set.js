/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  // Binary search.
  function binarySearch(arr, start, end, target) {
    if (start > end) {
      return false;
    }

    const mid = Math.floor((end + start) / 2);

    if (arr[mid] === target) {
      return true;
    }

    if (target < arr[mid]) {
      return binarySearch(arr, start, mid - 1, target);
    }
    return binarySearch(arr, mid + 1, end, target);
  }

  return binarySearch(arr, 0, arr.length - 1, target);
}

const nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 4));
console.log(findInOrderedSet(nums, 2));

module.exports = findInOrderedSet;
