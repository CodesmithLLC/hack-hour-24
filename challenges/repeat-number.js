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
  let max;
  let sum = 0;

  array.forEach((element) => {
    if (max === undefined || element) {
      max = element;
    }
    sum += element;
  });

  const sumFirstN = max * (max + 1) / 2;

  return sum - sumFirstN;
}

// console.log(repeatNumbers([2, 1, 2, 3, 4]));

module.exports = repeatNumbers;
