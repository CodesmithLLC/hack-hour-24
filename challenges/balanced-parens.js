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
  const open = ['(', '[', '{'];
  const close = [')', ']', '}'];
  const stack = [];
  let char;
  let matches;

  if (input.length <= 1) {
    return false;
  }

  for (let i = 0; i < input.length; i += 1) {
    char = input[i];
    if (close.indexOf(char) > -1) {
      matches = open[close.indexOf(char)];
      if (stack.length === 0 || (stack.pop() !== matches)) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return (stack.length === 0);
}

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false

// module.exports = balancedParens;
