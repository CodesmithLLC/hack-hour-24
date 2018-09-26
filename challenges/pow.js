/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  let negativePow = false;
  if(power < 0) {negativePow = true};
  if(power === 0) {return 1};
  if(!negativePow) {
    return base * pow(base, power-1);
  } else if(negativePow) {
    return 1/(base * pow(base, (power*-1)-1));
  }
}

console.log(pow(4,3));

module.exports = pow;
