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
    const storage = {};
    // loop through string to count occurrences
    for (let i = 0; i < str.length; i++) {
      if (storage[str[i]]) storage[str[i]] += 1;
      else storage[str[i]] = 1;
    }
    // create variable to count number of odd occurrences
    let odds = 0;
    // loop through object
    for (const key in storage) {
      // count number of odd occurrences
      if (storage[key] % 2 === 1) odds += 1;
      // if number of odds is greater than 1, palindrome does not exist, exit early
      if (odds > 1) return false;
    }
    // otherwise palindrome exists
    return true;
}

console.log(permPalin('abab'));
console.log(permPalin('cbaba'));
console.log(permPalin('cbac'));
console.log(permPalin('a'));

module.exports = permPalin;