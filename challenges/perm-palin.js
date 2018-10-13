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
  // if string.len is even, must have the same amount of every letter
  if (str.length === 1) return true;

  let workArr = Array.from(str);
  let cache = {};

  workArr.forEach(item => {
    if (cache[item]) cache[item] += 1;
    else cache[item] = 1;
  });
  const palCheck = Object.values(cache);

  if (str.length % 2 === 0) {
    for (let i = 1; i < palCheck.length; i += 1) {
      if (palCheck[0] !== palCheck[i]) return false;
    }
    return true;
  } else {
    palCheck.sort((a, b) => { a - b});
    for (let i = 2; i < palCheck.length; i += 1) {
      if (palCheck[1] !== palCheck[i]) return false
    }
    return true;
  }
}

module.exports = permPalin;
