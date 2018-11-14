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
  const objFor = {}; // key of number, val of position in array
  let uniqNumIndex;

  array.forEach((num, i) => {
    // if num already exists in object and the num from the uniq index is equal to this num
    if (objFor[num] && array[uniqNumIndex] === num) {
      // wipe uniqNumIndex;
    } else {
      objFor[num] = i;
      uniqNumIndex = i;
    }
  });

  return array[uniqNumIndex];
}

module.exports = uniqueNumber;

// console.log(uniqueNumber([1,2,1,3,3]))