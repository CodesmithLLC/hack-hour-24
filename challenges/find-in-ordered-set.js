/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let mid = Math.floor(arr.length / 2);

  if (target < arr[mid]) {
    if (mid === 0)
      return false;
    
    return findInOrderedSet(arr.slice(0, mid), target);
  }
  else if (target > arr[mid]) {
    if (mid === arr.length - 1)
      return false;

    return findInOrderedSet(arr.slice(mid+1), target);
  }
  else
    return true;
}

var nums = [1];
console.log(findInOrderedSet(nums, 0));
console.log(findInOrderedSet(nums, 1));
console.log(findInOrderedSet(nums, 2));
console.log(findInOrderedSet(nums, 3));
console.log(findInOrderedSet(nums, 4));

module.exports = findInOrderedSet;
