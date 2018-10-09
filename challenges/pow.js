/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

// linear recursion
// function pow(base, power) {
//   //when power equals 1
//   //base case return base
//   if (power === 1) return base;
//   //function
//   //return recurse, decrement power
//   return base * pow(base, --power)
// }

// tail end recursion
function pow(base, power) {
  // declare a const to create closure of the initial base
  const naturalBase = base;

  // define function which will be recursively called to find the power
  function recursivePow(product, decrementedPower) {
    // temporary lets to hold values which will be used within the function to prevent side effecs
    let currentPower = decrementedPower;
    let currentProduct = product;
    // base case returns the product of running the recursive funtion
    if (decrementedPower === 1) return product;
    // multiply the currentProduct variable by the const base
    currentProduct *= naturalBase;
    // decrement the power to keep track of how many times we have multiplied
    currentPower -= 1;
    // return the crecursive call if the power requires further multiplication
    return recursivePow(currentProduct, currentPower);
  }
  // call teh recursive function
  return recursivePow(base, power);
}

module.exports = pow;
