/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, product = 1) {
  if (power === undefined) return NaN;
  // what is 0^0?? Math.pow would return 1...?
  // if (base === 0 && power === 0) return undefined; 

  if (power === undefined) return undefined;
  if (power < 0) {
    let newP = Math.abs(power);
    if (power === 0) return product;
    return pow(1/base, newP - 1, 1/(product * base));
  }
  if (power === 0) return product;
  return pow(base, power - 1, product * base);

  
}
console.log(pow(-2, -5));
console.log(Math.pow(-2, -5))
module.exports = pow;
