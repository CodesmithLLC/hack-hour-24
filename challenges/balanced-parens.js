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

const balancedParens = function balancedParens(input) {
  // Create an array to hold a sequence of parens we are seeking
  const seeking = [];
  // Loop through input, searching for bracket characters
  for (let i = 0; i < input.length; i += 1) {
    // If an opening bracket character is found, log the closing bracket in the array
    if (input[i] === '(') {
      seeking.push(')');
    }
    if (input[i] === '[') {
      seeking.push(']');
    }
    if (input[i] === '{') {
      seeking.push('}');
    }
    // If a closing bracket character is found, confirm it matches the next closing braket we are seeking
    if (')]}'.includes(input[i])) {
      if (input[i] !== seeking.pop()) {
        return false;
      }
    }
  }
  // Confirm that bracket values balance
  if (seeking.length === 0) {
    return true;
  }
  // If not balanced, return false
  return false;
};

module.exports = balancedParens;

// console.log('TESTING balancedParens');
// console.log(`balancedParens('('): expect -> false: actual -> ${balancedParens('(')}`);
// console.log(`balancedParens('()'): expect -> true: actual -> ${balancedParens('()')}`);
// console.log(`balancedParens(')('): expect -> false: actual -> ${balancedParens(')(')}`);
// console.log(`balancedParens('(())'): expect -> true: actual -> ${balancedParens('(())')}`);
// console.log(`balancedParens('[(]{)}'): expect -> false: actual -> ${balancedParens('[(]{)}')}`);
// console.log(`balancedParens(' var wow  = { yo: thisIsAwesome() }'): expect -> true: actual -> ${balancedParens(' var wow  = { yo: thisIsAwesome() }')}`);
// console.log(`balancedParens(' var hubble = function() { telescopes.awesome();'): expect -> false: actual -> ${balancedParens(' var hubble = function() { telescopes.awesome();')}`);
