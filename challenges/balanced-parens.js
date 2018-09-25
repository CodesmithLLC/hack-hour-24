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
  const brackets = '[{()}]';
  let charsArray = input.split('');

  return (
    charsArray
      .filter(char => brackets.indexOf(char) > -1)
      .reduce((bool, bracket, i) => {
        if (
          (bracket === '[' && charsArray[charsArray.length - 1 - i] !== ']') ||
          (bracket === '{' && charsArray[charsArray.length - 1 - i] !== '}') ||
          (bracket === '(' && charsArray[charsArray.length - 1 - i] !== ')')
        ) {
          return false;
        }
        return bool;
      }, true)
  );
}

module.exports = balancedParens;


console.log(balancedParens('({[[]})'))