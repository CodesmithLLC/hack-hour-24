/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, output = base) {

  if (power === 1) { return output; }
  return pow(base, power -= 1, output * base);
}

module.exports = pow;
