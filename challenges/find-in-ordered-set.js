/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let midway = Math.floor(arr.length/2);
  let arrCopy = arr.slice();

  while (arrCopy.length > 1) {
    if(arrCopy[midway] === target) {
      return true;
    } else if (arrCopy[midway] > target){
      arrCopy = arrCopy.slice(0, midway);
    } else{
      arrCopy = arrCopy.slice(midway, arr.length);
    }
    midway = Math.floor(arrCopy.length/2);
  }
  return false;
}

var nums = [1, 4, 6, 7, 9, 17, 45, 67];
console.log(findInOrderedSet(nums, 27));
module.exports = findInOrderedSet;
