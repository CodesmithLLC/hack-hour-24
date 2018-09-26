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
  const parensCounts = {
    "(": 0,
    ")": 0,
    "[": 0,
    "]": 0,
    "{": 0,
    "}": 0
  }
  for(let i = 0; i < input.length; i++) {
    if(input[i] === "(") {
      parensCounts["("]++;
    } else if(input[i] === ")") {
      parensCounts[")"]++;
    } else if(input[i] === "[") {
      parensCounts["["]++;
    } else if(input[i] === "]") {
      parensCounts["]"]++;
    } else if(input[i] === "{") {
      parensCounts["{"]++;
    } else if(input[i] === "}") {
      parensCounts["}"]++;
    }
    console.log(parensCounts)
    if(checkIfMoreClosingParensThanOpening(parensCounts)) {
      return false
    }
  }
  return checkBalancedAtEndOfInput(parensCounts)
}


function checkIfMoreClosingParensThanOpening(obj) {
  if((obj[")"] > obj["("] || obj["]"] > obj["["] || obj["}"] > obj["{"])) {
    return true;
  }
  return false;
}

function checkBalancedAtEndOfInput(obj) {
  if((obj[")"] !== obj["("] || obj["]"] !== obj["["] || obj["}"] !== obj["{"])) {
    return false;
  }
  return true;
}
module.exports = balancedParens;
