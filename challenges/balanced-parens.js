/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.

 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input) {
  const parens = ['(', ')', '{', '}', '[', ']'];
  const counter = {};
  const splitString = input.split('');

  splitString.forEach((elem) => {
    if (parens.includes(elem)) {
      if (!counter[elem]) {
        counter[elem] = 1;
      } else {
        counter[elem] += 1;
      }
    }
  }); 
  for (let i = 0; i < parens.length; i += 2) {
    if (counter[parens[i]] !== counter[parens[i + 1]]) {
      return false;
    }
  }
  return true;
}

module.exports = balancedParens;
