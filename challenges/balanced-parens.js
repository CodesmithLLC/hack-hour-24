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
    
    let balance = {'(':')','{':'}','[':']'}
    let openers = '({['
    let closers = '}])'
    let stack = [];
    let i = 0;
    while(i < input.length){
      if(openers.includes(input[i])){
        stack.push(input[i])
      }else if(closers.includes(input[i])) {
        if(stack.length === 0) return false;
        let popped = stack.pop();
        if(input[i] !== balance[popped]){
          return false;
        }
      }
      i++; 
    }
    if (stack.length === 0){
      return true;
    } else{
      return false;
    }
}
const input = ')(';
console.log(balancedParens(input));
module.exports = balancedParens;
