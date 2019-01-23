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
  for (let i = 1; i <= lesser; i += 1) {
    const divNum = lesser / i;
    if (divNum === Math.floor(divNum)) {
      if (a / divNum === Math.floor(a / divNum)) {
        return divNum;
      }
    }
  }
}




module.exports = gcd;
