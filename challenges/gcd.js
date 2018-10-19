/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let i = Math.min(a, b);
  while (i > 1) {
    if (!(a % i) && !(b % i)) return i;
    i = Math.max((a % i), (b % i));
  }
  return i;
}

module.exports = gcd;

// console.log('---TESTING gcd---');
// console.log(`gcd(12, 9): expect -> 3: actual -> ${gcd(12, 9)}`);
// console.log(`gcd(10, 8): expect -> 2: actual -> ${gcd(10, 8)}`);
// console.log(`gcd(10, 9): expect -> 1: actual -> ${gcd(10, 9)}`);
