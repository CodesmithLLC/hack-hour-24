/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) return [...arr1, arr2];
  const returnArr = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      returnArr.push(arr1.shift());
    } else {
      returnArr.push(arr2.shift());
    }
  }
  return [...returnArr, ...arr1, ...arr2];
}

module.exports = mergeArrays;

// console.log('---TESTING mergeArrays---');
// console.log(`mergeArrays([1, 2, 3], []): expect -> [1, 2, 3]: actual -> [${mergeArrays([], [1, 2, 3])}]`);
// console.log(`mergeArrays([], [1, 2, 3]): expect -> [1, 2, 3]: actual -> [${mergeArrays([], [1, 2, 3])}]`);
// console.log(`mergeArrays([1, 2, 3], [4, 5, 6]): expect -> [1, 2, 3, 4, 5, 6]: actual -> [${mergeArrays([1, 2, 3], [4, 5, 6])}]`);
// console.log(`mergeArrays([-3, -2, -1], [-6, -5, -4]): expect -> [-6, -5, -4, -3, -2, -1]: actual -> [${mergeArrays([-3, -2, -1], [-6, -5, -4])}]`);
// console.log(`mergeArrays([4, 5, 6], [1, 2, 3]): expect -> [1, 2, 3, 4, 5, 6]: actual -> [${mergeArrays([4, 5, 6], [1, 2, 3])}]`);
// console.log(`mergeArrays([1, 3, 5], [2, 4, 6]): expect -> [1, 2, 3, 4, 5, 6]: actual -> [${mergeArrays([1, 3, 5], [2, 4, 6])}]`);
// console.log(`mergeArrays([1, 3, 5, 7, 8, 9], [2, 4, 6]): expect -> [1, 2, 3, 4, 5, 6, 7, 8, 9]: actual -> [${mergeArrays([1, 3, 5, 7, 8, 9], [2, 4, 6])}]`);
// console.log(`mergeArrays([1, 3, 5], [2, 4, 6, 7, 8, 9]): expect -> [1, 2, 3, 4, 5, 6, 7, 8, 9]: actual -> [${mergeArrays([1, 3, 5], [2, 4, 6, 7, 8, 9])}]`);
