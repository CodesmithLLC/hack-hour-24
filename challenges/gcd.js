/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const end = Math.min(a, b);

  for (let i = end; i > 0; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
}

// console.log(gcd(10, 9));

module.exports = gcd;
