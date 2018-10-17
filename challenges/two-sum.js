/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    let newArr = arr.sort((a, b) => a - b);
    let i = 0;
    let j = arr.length - 1;
    while(i < j) {
        let sum = arr[i] + arr[j];
        if (sum === n)
            return true;
        else if (sum < n)
            i++;
        else
            j--;
    }
    return false;
}
console.log(twoSum([5, 9, 13, 1], 10));
console.log(twoSum([5, 9, 13, 1], 9));

module.exports = twoSum;
