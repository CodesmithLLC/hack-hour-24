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
    let i = 0;
    let j = 0;
    let res = [];
    while (i < arr1.length || j < arr2.length) {
        if (i === arr1.length) {
            while (j < arr2.length)
                res.push(arr2[j++]);
            break;
        }
        else if (j === arr2.length) {
            while (i < arr1.length)
                res.push(arr1[i++]);
            break;
        }
        else {
            if (arr1[i] < arr2[j])
                res.push(arr1[i++]);
            else
                res.push(arr2[j++]);
        }
    }
    return res;
}
let arr1 = [1, 5, 6];
let arr2 = [2, 3, 7, 11, 19];
console.log(mergeArrays(arr1, arr2));


module.exports = mergeArrays;
