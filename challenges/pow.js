/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    //base case
    if (power === 1) {
        return base;
    }
  
  	if (power === -1) {
      return 1/base;
    }
  
  	if (power < 0) {
      return 1/base * pow(base, power+1);
    }
  	
  	if (power > 0) {
    return base * pow(base, power-1)
    }
}

console.log(pow(2,-2));
console.log(pow(2,3));

module.exports = pow;
