/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i += 1){
    if(arr.includes(n-arr[i])){
      return true;
    }
  }
  return false;
}

let test = [1,2,3,4,5,6,7]

console.log(twoSum(test, 12));

module.exports = twoSum;
