/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let lesser = Math.min(a, b);
  for (let i = 2; i <= lesser; i += 1) {
    let divNum = b / i;
    if (divNum === Math.floor(divNum)) {
      if (a / divNum === Math.floor(a / divNum)) {
        return divNum;
      }
    }
  }
}


module.exports = gcd;
