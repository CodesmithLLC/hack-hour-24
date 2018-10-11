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
  const mergedArray = [];
  const length = Math.max(arr1.length, arr2.length);

  // loop through the longer array
  for (let i = 0; i < length; i += 1) {
    // compare two numbers at that index
    const arr1Num = arr1[i];
    const arr2Num = arr2[i];
    // if either number is undefined (end of array), auto add the valid number
    if (!arr1Num) mergedArray.push(arr2Num);
    else if (!arr2Num) mergedArray.push(arr1Num);
    // else we compare and push smallest to largest
    else {
      const sortedArray = [arr1Num, arr2Num].sort();
      mergedArray.push(...sortedArray);
    }
  }
  // return array
  return mergedArray;
}

module.exports = mergeArrays;

const my_array = [3, 4, 6, 10, 11, 15, 21];
const another_array = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(my_array, another_array));
