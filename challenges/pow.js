/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

// function pow(base, power) {
//   if (power === 0) {
//     return 1;
//   }

//   if (power > 0) {
//     return base * pow(base, power - 1);
//   }
//   // If power is negative.
//   return (1 / base) * pow(base, power + 1);
// }

// Tail end recursion?
function pow(base, power, total = 1) {
  if (power === 0) {
    return total;
  }

  if (power > 0) {
    return pow(base, power - 1, total * base);
  }
  return pow(base, power + 1, total * 1 / base);
}

module.exports = pow;
