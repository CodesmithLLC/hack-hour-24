/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  // // not O(1) space
  // const countObj = {};
  // for (let i = 0; i < array.length; i += 1) {
  //   countObj[array[i]] = (countObj[array[i]] || 0) + 1;
  //   if (countObj[array[i]] === 2) {
  //     return array[i];
  //   }
  // }

  // O(1) space and O(n) time
  let sum = 0;
  let max;

  array.forEach(ele => {
    if (max === undefined || ele > max) {
      max = ele;
    }
    sum = sum + ele;
  });

  // formula for sum of n natural numbers
  const naturalSum = max * (max + 1) / 2;
  return sum - naturalSum;
}


console.log(repeatNumbers([1,2,3,4,5,3,6,7]))
module.exports = repeatNumbers;
