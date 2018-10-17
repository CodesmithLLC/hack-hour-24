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
  // Use to match opening parens with closing parens.
  const matchParens = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  // Index into input.
  let i = 0;
  const openers = '({[';
  const closers = ')}]';
  const stack = [];

  while (i < input.length) {
    // If opening parens, push to stack.
    if (openers.includes(input[i])) {
      stack.push(input[i]);
    } else if (closers.includes(input[i])) { // If closing parens, pop off stack to is if open parens matches.
      if (stack.length === 0 || matchParens[stack.pop()] !== input[i]) {
        return false;
      }
    }
    i += 1;
  }

  // Return true if all opening parens matched closing parens and stack has no more parens.
  return stack.length === 0;
}

// console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));

module.exports = balancedParens;
