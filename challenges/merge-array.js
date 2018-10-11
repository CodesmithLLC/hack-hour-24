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
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;
    const resultArr = [];

    // iterate through both arrays, check the values and push them in order into a new array
    // if one arr is longer than the other, just insert the end of it in the right place
    if (arr1.length > arr2.length) {
      const longArr = Array.from(arr1);
      const shortArr = Array.from(arr2);
    } 
    else if (arr1.length < arr2.length) {
      const longArr = Array.from(arr2);
      const shortArr = Array.from(arr1);
    }
    else {
      const workArr1 = Array.from(arr1);
      const workArr2 = Array.from(arr2);
    }

    if (longArr) {
      longArr.forEach((item, index) => {
        if(shortArr[index] === undefined) {
          if (item > resultArr[resultArr.length - 1]) {
            resultArr.push(item);
          }
          else (resultArr.splice(resultArr.length - 2, 0, item));
        }
        else if (item > shortArr[index]) {
          resultArr.push(shortArr[index]);
          resultArr.push(item);

        }
        else {
          resultArr.push(shortArr[index]);
          resultArr.push(item);
        }
      });
    }
    else {
      workArr1.forEach((item, index) => {
        if (item > workArr2[index]) {
          resultArr.push(workArr2[index]);
          resultArr.push(item);
        }
        else {
          resultArr.push(item);
          resultArr.push(workArr2[index]);
        }
      });
    }
}


module.exports = mergeArrays;
