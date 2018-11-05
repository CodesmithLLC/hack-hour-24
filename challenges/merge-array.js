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




// // function mergeArrays(arr1, arr2) {
//   // create result arr to push onto
//   const result = [];
//   // iterate through arr1
//   for (let i = 0; i < arr1.length; i += 1) {
//     // while arr2[0] <= arr1[0] unshift arr2 and push onto result
//     while (arr2[0] <= arr1[i]) {
//       result.push(arr2.shift());
//     }
//     // push arr1[i] onto result arr
//     result.push(arr1[i]);
//   }
//   // return result arr
//   return result;
// }


function mergeArrays(arr1, arr2) {
  let i1 = 0;
  let i2 = 0;
  let result = []
  while (i1 < arr1.length || i2 < arr2.length) {
    if (!arr2[i2] || (arr1[i1] < arr2[i2])) {
      result.push(arr1[i1]);
      i1 += 1;
    }
    if (!arr1[i1] || (arr2[i2] <= arr1[i1])) {
      result.push(arr1[i2]);
      i2 += 1;
    }
  }
  return result;
}



module.exports = mergeArrays;


var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];
console.log(mergeArrays(my_array, another_array));