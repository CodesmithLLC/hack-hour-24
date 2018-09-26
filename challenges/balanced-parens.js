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
  const inputArr = input.split('');

  const openers = ['{', '[', '('];
  const closers = ['}', ']', ')'];

  let openBracket =[];
  let closeBracket = [];

  for (let i = 0; i < inputArr.length; i += 1) {
    if (openers.indexOf(inputArr[i]) !== -1 ) {
      openBracket.push(inputArr[i])
    } else if (closers.indexOf(inputArr[i] !== -1)) {
      closeBracket.push(inputArr[i]);
    }
  }

  if (openBracket.length > closeBracket.length || openBracket.length < closeBracket.length) return false;

  function linearChecker(arr1, arr2) {
    for (let i = 0; i < arr1.length; i += 1) {
      if (openers.indexOf(arr1[i]) !== -1) {
        
      }
    }
  }

  console.log(openBracket)
  console.log(closeBracket)

  return true;
}



console.log(balancedParens('[]{}()'))
module.exports = balancedParens;
