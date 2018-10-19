/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

// function gcd(a, b) {
//   let i = a < b ? a : b;
//   let i2 = a>b?a:b;
//   console.log(i2%i)
//   const test = i2%i;
//   while (i >= 1) {
//     // console.log(i)
//     if (a % i === 0 && b % i === 0) {
//       return i;
//     }
//     i--;
//   }
// }
function gcd(x, y) {
  // if ((typeof x !== 'number') || (typeof y !== 'number')) {

  //   return false;
  // }
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    let temp = y;  //14 8 6 2 0
    y = x % y;  //8 6 2 0 
    x = temp;  // 14 8 6 2
    if (y === 0) {
      return x;
    }
  }
}
// console.log(gcd(36, 16))
module.exports = gcd;