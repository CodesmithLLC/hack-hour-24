/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

//input: base, power
//output: number

//if power is 0, return 1
//else if power is 1, return the base
//return power function taking in input base multiplied with power function base, power -1

function pow(base, power) {
  if (power === 0) {
    return 1;
  } else if (power === 1) {
    return base;
  }
  return pow(base, power - 1) * pow(base, 1);
}

console.log(pow(2, 4));

module.exports = pow;
