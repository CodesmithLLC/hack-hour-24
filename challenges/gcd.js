/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let lowerNumber = Math.min(a,b);
  let high = Math.max(a,b);
  while (lowerNumber >= 1) {
    if (a % lowerNumber === 0 && b % lowerNumber === 0){
      return lowerNumber;
    } else{
      lowerNumber = high % lowerNumber;
    }
  }
  return lowerNumber;
}

console.log(gcd(6,80));

module.exports = gcd;