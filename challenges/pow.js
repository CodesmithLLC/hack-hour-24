
/** 
* @name pow
* @description function that calculates x^y, where x is given as the base and y is given as the power using recursion.
*/

function pow(base, power) {
    //base cases
    if (power === 1) {
        return base;
    }
  	if (power === -1) {
      return 1/base;
    }
    //recursion for negative numbers
  	if (power < 0) {
      return 1/base * pow(base, power+1);
    }
  	//recursion for positive numbers
  	if (power > 0) {
    return base * pow(base, power-1)
    }
}

//test cases
console.log(pow(2,-2));
console.log(pow(2,3));

module.exports = pow;
