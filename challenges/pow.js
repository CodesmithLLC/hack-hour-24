/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, total = 1) {
  return (power === 0) ? total : pow(base, power -= 1, total *= base)
}
console.log(pow(5, 7));

module.exports = pow;
