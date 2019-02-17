/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (power === 0) {
    return 1;
  };
  return base * pow(base, power - 1);
}

// function powTail(base, power, current = 1) {
//   if (power === 1) {
//     return base * current;
//   } else {
//     current *= base;
//     power -= 1;
//     return powTail(base, power, current);
//   }
// }


module.exports = pow;
