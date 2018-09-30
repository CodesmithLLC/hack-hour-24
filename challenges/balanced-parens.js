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

  const charsArray = input
    .split('')
    .filter(char => '[{()}]'.includes(char))
    .reduce((stack, bracket) => {
      if ('[{('.includes(bracket)) stack.push(bracket);
      else {
        const pair = stack.pop() + bracket;
        if ('[]{}()'.includes(pair) === false) return false;
      }
      return stack;
    }, []);

  return charsArray.length === 0;
}

module.exports = balancedParens;

// console.log(balancedParens(' var hubble = function() { telescopes.awesome();'))