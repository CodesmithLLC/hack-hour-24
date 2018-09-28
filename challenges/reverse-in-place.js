

/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
  // Loop through array with one index starting at the first element and one index starting at the last.
  // Swap elements at indices until indices have passed each other.
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    const temp = array[start];
    array[start] = array[end];
    array[end] = temp;

    start += 1;
    end -= 1;
  }

  return array;
}

// Tests.
// console.log(reverseInPlace([1, 2, 3]));
// console.log(reverseInPlace([1, 2, 3, 4]));

module.exports = reverseInPlace;
