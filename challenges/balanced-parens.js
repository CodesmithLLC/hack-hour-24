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
  const neededParens = [];

  for (let i = 0; i < input.length; i += 1) {
    if (input[i] === '(') {
      neededParens.push(')');
    }
    if (input[i] === ')') {
      if (neededParens.pop() !== ')') return false;
    }
    if (input[i] === '[') {
      neededParens.push(']');
    }
    if (input[i] === ']') {
      if (neededParens.pop() !== ']') return false;
    }
    if (input[i] === '{') {
      neededParens.push('}');
    }
    if (input[i] === '}') {
      if (neededParens.pop() !== '}') return false;
    }
  }
  return (neededParens.length === 0);
}

// console.log(balancedParens('[](){}'))  // 
// console.log(balancedParens('[({})]')) // 
// console.log(balancedParens('[(]{)}'))  //



module.exports = balancedParens;
