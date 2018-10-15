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
  
  let arr = str.split('');
  let keeper = [];
  
  function recurser(arr, keeper) {
    if (str.length === 0 && str === str.split('').reverse().join('')) return true;
    if (str.length === 0 && str !== str.split('').reverse().join('')) return false;

    keeper.push(arr.shift());
    
    return recurser()
  }
  
  return recurser();
}

module.exports = permPalin;