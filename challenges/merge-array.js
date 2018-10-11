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
  let output = [];
  while (arr1.length !== 0 && arr2.length !== 0) {
    if (arr1[0] < arr2[0]) {
      output.push(arr1.shift());
    } else {
      output.push(arr2.shift());
    }
  }
  output = output.concat(arr1);
  output = output.concat(arr2);
  return output;
}
// const myArray = [-10, 3,4,6,10,11,15,21];
// const anotherArray = [1,5,8,12,14,19];
// const ex = [];

// const result = JSON.stringify(mergeArrays(ex, myArray));
// console.log(result)
// const expected = JSON.stringify([-10, 1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]);
// console.log(result === expected);
