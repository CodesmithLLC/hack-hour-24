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
  const output = [];
  let arr1Index = 0;
  let arr2Index = 0;
  if (arr1.length === 0) return arr2;
  else if (arr2.length === 0) return arr1;
  else{
    while (arr1Index < arr1.length && arr2Index < arr2.length) {
      if(arr1[arr1Index] < arr2[arr2Index]){
        output.push(arr1[arr1Index]);
        arr1Index++;
      } else{
        output.push(arr2[arr2Index])
        arr2Index++;
      }
    }
    if(arr1Index < arr1.length){
      while(arr1Index < arr1.length){
        output.push(arr1[arr1Index]);
        arr1Index += 1;
      }
    } else if(arr2Index < arr2.length){
      while(arr2Index < arr2.length){
        output.push(arr2[arr2Index]);
        arr2Index += 1;
      }
    } 
    return output;
  } 
}
const test1 = [3,4,6,10,11,15,21, 24, 25, 26, 27];
const test2 = [1,5,8,12,14,28, 29, 30];
console.log(mergeArrays(test1, test2));

module.exports = mergeArrays;
