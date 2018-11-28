/* eslint linebreak-style: 0 */

/*
A zero-indexed array A consisting of N different integers is given.
The array contains integers in the range [1..(N + 1)], which means
that exactly one element is missing.Your goal is to find that missing element.
Write a function that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Assume that:
 * N is an integer within the range [0..100,000];
 * the elements of A are all distinct;
 * each element of array A is an integer within the range [1..(N + 1)].
 Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).

Challange:
  ** cannot use additional storage, variables are okay not any TYPE of object
  ** keep in mind time complexity
*/

const missingNum = (arr) => {
  // Algorithm for finding the sum of numbers 1 thru N
  const sum1thruN = ((arr.length + 1) * (arr.length + 2)) / 2;
  // Use reduce to sum up values in input array
  const sumArr = arr.reduce((a, b) => a + b);
  // Find and return the difference
  return sum1thruN - sumArr;
};

module.exports = missingNum;

// console.log('---TESTING missingNum---');
// console.log(`missingNum([5, 4, 2, 1]): expect -> 3: actual -> ${missingNum([5, 4, 2, 1])}`);
