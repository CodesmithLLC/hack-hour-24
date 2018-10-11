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
  let L1 = arr1.length;
  let L2 = arr2.length;
  let L = L1<L2?L1:L2
  let arr = [];
  // when i use while loop, it didn't work???
  for (let i = 0; i < 2*L; i += 1) {
    // console.log(arr1[0],arr2[0]);
    if (arr1[0] <= arr2[0]){
      arr.push(arr1[0]);
      arr1 = arr1.slice(1);
    }
    else if (arr1[0] > arr2[0]){
      arr.push(arr2[0]);
      arr2 = arr2.slice(1);
    }
    // console.log(arr)
  }
  arr = arr.concat(arr2).concat(arr1);
  return arr;
}
console.log(mergeArrays([1,4,6], [0,2,5,7,10]))
// console.log(mergeArrays([3,4,6,10,11,15,21], [1,5,8,12,14,19]))
module.exports = mergeArrays;
