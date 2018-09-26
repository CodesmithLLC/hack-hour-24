/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
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
  const openBrackets = ['[', '{', '('];
  const closedBrackets = [']', '}', ')'];

  const obj = {
    '[': ']',
    '(': ')',
    '{': '}',
  };
  // If current ch is opening bracket push to array
  // If current ch is closing bracket pop off
  const array = [];
  for (let i = 0; i < input.length; i += 1) {
    const ch = input[i];
    if (openBrackets.indexOf(ch) !== -1) {
      array.push(ch);
    } else if (closedBrackets.indexOf(ch) !== -1) {
    input.pop();
    
  }
  return array;
}

console.log(balancedParens('(){}0['));
module.exports = balancedParens;
