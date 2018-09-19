/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  let output = base
  while (power > 1) {
    output *= base;
    power--;
  }
  return output;
}



module.exports = pow;
