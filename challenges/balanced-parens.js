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

// input: anything
// output: boolean

// divide the string input in half arrays
// if the length of the string is odd then return false
// if the length of the string is even then
//     iterate through the first half of the array
//     iterate through the second half of the array
//         check if the first element of the first half array is equal to the last element of the second half array

function balancedParens(input) {
  let parnes = {
    openBrac: "[",
    closedBrac: "]",
    openBraces: "{",
    closedBraces: "}"
  };
  if (input.length % 2 === 1) return false;
  let newArray = input.split("");
  let firstArray = newArray.filter(element => {
    newArray.indexOf(element) < newArray.length / 2;
  });
  let secondArray = newArray.filter(element => {
    newArray.indexOf(element) > newArray.length / 2;
  });

  console.log(firstArray);
  console.log(secondArray);

  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; i++) {
      if (firstArray[i] === secondArray[secondArray.length - [i]]) {
        return true;
      }
    }
  }
}

console.log(balancedParens("[](){}")); // true
console.log(balancedParens("[({})]")); // true
console.log(balancedParens("[(]{)}")); // false

module.exports = balancedParens;
