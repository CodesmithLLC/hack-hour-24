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
  const store = {};
  const strArr = str.split('');
  strArr.forEach((letter) => {
    if (store[letter]) {
      store[letter] += 1;
    } else {
      store[letter] = 1;
    }
  });
  const storeKeys = Object.keys(store);
  let oddLetters = 0;
  storeKeys.forEach((k) => {
    if (store[k] % 2 === 1) {
      oddLetters += 1;
    }
  });
  return oddLetters <= 1;
}


module.exports = permPalin;
