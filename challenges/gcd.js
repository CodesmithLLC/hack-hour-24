/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const lesser = Math.min(a, b);
  const greater = Math.max(a, b);
  for (let i = 1; i <= lesser; i += 1) {
    const divNum = lesser / i;
    if (divNum === Math.floor(divNum)) {
      if (greater / divNum === Math.floor(greater / divNum)) {
        return divNum;
      }
    }
  }
}




module.exports = gcd;
