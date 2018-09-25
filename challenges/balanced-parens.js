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

  let test = '()';
  let opened = true;
  let open = 0;
  let close = 0;
  if(input[0] == test[1]) {
    return false;
  }
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] == test[0]) {
      if (opened == false && open > close) {
        return false;
      } else {
        opened = true;
        open += 1;
      }
    } else if (input[i] == test[1]) {
      opened = false;
      close += 1;
        if(close > open){
          return false;
        }
    }
  }
  if(open !== close) {
    return false;
  }
  return true;
}
let tester = '((()()))';
console.log(balancedParens(tester));

module.exports = balancedParens;
