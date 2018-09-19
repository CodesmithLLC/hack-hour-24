/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, product = 1) {
  if (power === 0) return product;
  return pow(base, power - 1, product * base);
}
// console.log(pow(5,3));
module.exports = pow;
