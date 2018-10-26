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
  const parensStack = [];
  const charsOnlyArray = input
    .split('')
    .filter(char => '[{()}]'.includes(char));

  for (let i = 0; i < charsOnlyArray.length; i += 1) {
    if ('{[('.includes(charsOnlyArray[i])) parensStack.push(charsOnlyArray[i]);
    else {
      const pair = parensStack.pop() + charsOnlyArray[i];
      if ('[]{}()'.includes(pair) === false) return false;
    }
  }
  return parensStack.length === 0;
}

module.exports = balancedParens;
