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


function balancedParens(input){
  // create an array of input
  const inputArr = input.split('');
  // create a stack
  const stack = [];
  // loop through input string
  for (let i=0; i<inputArr.length; i++) {
    // as you loop through, place values in stack, if, it hits the ending parens, loop backwards until you hit an opening parens
    if ('({[]})'.includes(inputArr[i])) {
      if ('([{'.includes(inputArr[i])) {
        stack.push(inputArr[i])
      } else if (
        (inputArr[i] === ')' && stack[stack.length-1] === '(') ||
        (inputArr[i] === ']' && stack[stack.length-1] === '[') ||
        (inputArr[i] === '}' && stack[stack.length-1] === '{')
      ) {
        stack.pop();
      } else {
        stack.push(inputArr[i]);
      }
    }
    
  }
  return (stack[0]) ? false : true;
}
console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));

module.exports = balancedParens;
