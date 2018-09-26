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
  const arrL = [];
  const arrR = [];
  // loop through all chars
  for (let i = 0; i < input.length; i++) {
    // we only need to think about special characters
    if(input[i] === '['||input[i] === '{'||input[i] === '('||input[i] === ']'||input[i] === '}'||input[i] === ')') {
      // if they are left chars, add them to left array
      if (input[i] === '['||input[i] === '{'||input[i] === '(') {
        arrL.push(input[i]);
        // console.log(arrL,arrR)
      }
      // if they are right chars, and the last one in left array is the corresponding left char, we remove that corresponding char
      else if ((input[i] === ']' && arrL[arrL.length-1] === '[')||(input[i] === '}' && arrL[arrL.length-1] === '{')||(input[i] === ')' && arrL[arrL.length-1] === '(')) { 
        arrL.pop();
        // console.log(arrL,'t',arrR)
      }
      //  if they are right chars, and the last one is not the corresponding char, add them to right array
      else if ((input[i] === ']' && arrL[arrL.length-1] !== '[')||(input[i] === '}'&& input[arrL.length-1] !== '{')||(input[i] === ')' && input[arrL.length-1] !== '(')) {
        arrR.push(input[i])
        // console.log(arrL,'t',arrR)
      }
    }
  }  
  // console.log(arrL,'t',arrR)
  if (arrL.length === 0 && arrR.length === 0) return true;
  return false;
}

console.log(balancedParens('[][{}](asdfggrwyts aklahfdsan)'))

module.exports = balancedParens;
