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
  const workArr = Array.from(input);
  let balance = 0;

  workArr.forEach((item) => {
    switch (item) {
      case '(':
        balance += 1;
        break;
      case '{':
        balance += 1;
        break;
      case '[':
        balance += 1;
        break;
      case '}':
        if (balance === 0) return false;
        balance -= 1;
        break;
      case ')':
        if (balance === 0) return false;
        balance -= 1;
        break;
      case ']':
        if (balance === 0) return false;
        balance -= 1;
        break;
      default:
        break;
    }
  });
  return (balance === 0);
}


// function balancedParens(input) {
//   const object = {
//     openBrackets: [],
//   };
//   const workArr = Array.from(input);

//   workArr.forEach((item) => {
//     switch (item) {
//       case '[':
//         object.openBrackets.unshift(item);
//         break;
//       case '(':
//         object.openBrackets.unshift(item);
//         break;
//       case '{':
//         object.openBrackets.unshift(item);
//         break;
//       case ']':
//         if (object.openBrackets[0] !== '[') return false;
//         object.openBrackets.shift();
//         break;
//       case ')':
//         if (object.openBrackets[0] !== '(') return false;
//         object.openBrackets.shift();
//         break;
//       case '}':
//         if (object.openBrackets[0] !== '{') return false;
//         object.openBrackets.shift();
//       default:
//         break;
//     }
//   });

//   return (object.openBrackets.length === 0);
// }


console.log(balancedParens(')('));
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]')); // true
console.log(balancedParens('[(]{)}')); // false

module.exports = balancedParens;
