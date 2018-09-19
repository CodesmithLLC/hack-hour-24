/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, product = 1) {
  if (power === 0) return product;
  const newPower = power - 1;
  return pow(base, newPower, base * product);
}

module.exports = pow;

// power is the incremeneter
// 2^3... 1*2, 2*2, 4*2


console.log(pow(2, 5));
// power 2
// 2 * pow(2, 2)
// power 1
// 2 * pow(2, 1)
// power 0
// 2 * pow(2, 0)
