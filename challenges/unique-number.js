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
  // XOR is one or the other X ^

  // declare our result var
  let output = 0;
  // iterate through our array
  for (let i = 0; i < array.length; i += 1) {
    output = output ^ array[i];
  }
  // return the output
  return output;

  // alternative
  // return array.reduce((acc, next) => acc ^ next);
}

module.exports = uniqueNumber;
