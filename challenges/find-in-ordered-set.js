/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let found = false;
  function recurse (array) {
    if (array[Math.floor(array.length / 2)] === target) {
      found = true;
      return;
    }
    else if (array.length === 1 && array[0] !== target) {
      return;
    }
    else if (array[Math.floor(array.length / 2)] > target) {
      let halfArray = [];
      for (let i = 0; i < Math.floor(array.length/2); i += 1) {
        halfArray.push(array[i]);
      }
      recurse(halfArray);
    }
    else if (array[Math.floor(array.length / 2)] < target) {
      let halfArray = [];
      for (let i = Math.floor(array.length/2); i < array.length; i += 1) {
        halfArray.push(array[i]);
      }
      recurse(halfArray);
    }
  }

  recurse(arr);
  return found; 

}

var nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 4)); // -> true
console.log(findInOrderedSet(nums, 2)); // -> false


module.exports = findInOrderedSet;
