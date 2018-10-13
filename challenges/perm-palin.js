/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  // Declare a table to store if character frequency is odd or even
  const store = {};
  // Loop through the string, storing characters with odd frequency
  str.split('').forEach((char) => {
    if (!store[char]) store[char] = 1;
    else delete store[char];
  });
  // Check whether string length is odd or even
  if (str.length % 2) {
    // If string length is odd, it must have one non-repeating letter
    return Object.keys(store).length === 1;
  }
  // If string length is even, it must have no non-repeating letters
  return Object.keys(store).length === 0;
};

module.exports = permPalin;

console.log('---TESTING permPalin---');
console.log(`permPalin('abab'): expect -> true: actual -> ${permPalin('abab')}`);
console.log(`permPalin('cbaba'): expect -> true: actual -> ${permPalin('cbaba')}`);
console.log(`permPalin('cbac'): expect -> false: actual -> ${permPalin('cbac')}`);
console.log(`permPalin('a'): expect -> true: actual -> ${permPalin('a')}`);
