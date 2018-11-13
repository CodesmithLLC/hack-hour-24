/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  // A number xor itself is 0.
  // XOR is true for 01 and 10 and false for 00 and 11.
  return array.reduce((a, b) => a ^ b);
}

console.log(uniqueNumber([1, 2, 1, 3, 3]));

module.exports = uniqueNumber;
