/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  const mid = Math.floor(arr.length / 2);
  let newArr;

  if (arr[mid] === target) return true;
  if (arr.length === 1 && arr[mid] !== target) return false;
  if (arr[mid] > target) {
    newArr = arr.slice(0, mid);
    console.log(newArr);
    return findInOrderedSet(newArr, target);
  }
  newArr = arr.slice(mid);
  console.log(newArr);
  return findInOrderedSet(newArr, target);
}


module.exports = findInOrderedSet;

var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, ))

