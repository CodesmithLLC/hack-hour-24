/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  return a === 0? b : gcd(b % a, a);
}

console.log(gcd(10, 8));
module.exports = gcd;