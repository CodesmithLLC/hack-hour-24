/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let gettingDivided = (a > b) ? a : b;
  let remain = (a > b) ? b : a;
  let temp;

  while (remain !== 0) {
    temp = remain;
    remain = gettingDivided % remain;
    gettingDivided = temp;
  }

  return temp;
}
// console.log(gcd(10, 10))


module.exports = gcd;