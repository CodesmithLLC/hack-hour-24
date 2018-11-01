/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let lesser;
  let greater;
  let mod = 1;
  
  // check which is greater and which is lesser
  if (a > b) {
    greater = a;
    lesser = b;
  }
  else {
    greater = b;
    lesser = a;
  }
  // mod greater by lesser
  while (mod > 0) {
    let mod = greater % lesser;
    console.log(mod);
    greater = lesser;
    lesser = mod;
  }

  // return lesser;
  // if mod !== 0
  // divide lesser by remainder
  // if mod === 0 
  // return the divisor

}

console.log(gcd(10, 8));
module.exports = gcd;