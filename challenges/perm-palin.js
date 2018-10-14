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
  const letters = Object.keys(str
    .split('')
    .reduce((obj, nextLetter) => {
      if (obj[nextLetter] === 1) delete obj[nextLetter];
      else obj[nextLetter] = 1;
      return obj;
    }, {}));

  return letters.length === 0 || letters.length === 1;
}

module.exports = permPalin;
