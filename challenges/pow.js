/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

// function pow(base, power) {
//   //when power equals 1
//   //base case return base
//   if (power === 1) return base;
//   //function
//   //return recurse, decrement power
//   return base * pow(base, --power)
// }

function pow(base, power) {

  let naturalBase = base;

  function recursivePow (base, power) {
    if (power === 1) return base;
    base = base * naturalBase;
    power -= 1;
    return recursivePow(base, power);
  }

  return recursivePow(base, power)
}

console.log(pow(2,12500));

module.exports = pow;
