/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

/**
 * @name pow
 * @description Caclulates x^y, where x is the base and y is the power
 * @param {number} base Base number which will be multipled by itself
 * @param {number} power Number of times you want to multiply base by itself
 * @returns {number} Base to the power of power
 */
function pow(base, power) {
  // Assume power is always an integer (negative integers ok)
  // Edge case - if the power is 0, return 1
  if (power === 0) {
    return 1;
  }
  // If the power is positive, use recursion to return base * power by power times
  if (power > 0) {
    if (power === 1) {
      return base;
    }
    return base * pow(base, power - 1);
  }
  // If the power is negative, then divide by 1
  return 1 / pow(base, power * -1);
}

module.exports = pow;

// console.log('---TESTING POW---');
// console.log(`pow(0, 0): expect -> 1: actual -> ${pow(0, 0)}`);
// console.log(`pow(0, 1): expect -> 0: actual -> ${pow(0, 1)}`);
// console.log(`pow(0, 2): expect -> 0: actual -> ${pow(0, 2)}`);
// console.log(`pow(1, 0): expect -> 1: actual -> ${pow(1, 0)}`);
// console.log(`pow(1, 1): expect -> 1: actual -> ${pow(1, 1)}`);
// console.log(`pow(1, 2): expect -> 1: actual -> ${pow(1, 2)}`);
// console.log(`pow(5, 0): expect -> 1: actual -> ${pow(5, 0)}`);
// console.log(`pow(5, 1): expect -> 5: actual -> ${pow(5, 1)}`);
// console.log(`pow(5, 2): expect -> 25: actual -> ${pow(5, 2)}`);
// console.log(`pow(5, 3): expect -> 125: actual -> ${pow(5, 3)}`);
// console.log(`pow(5, 4): expect -> 625: actual -> ${pow(5, 4)}`);
// console.log(`pow(5, -1): expect -> 0.2: actual -> ${pow(5, -1)}`);
// console.log(`pow(5, -2): expect -> 0.04: actual -> ${pow(5, -2)}`);
// console.log(`pow(5, -3): expect -> 0.008: actual -> ${pow(5, -3)}`);
// console.log(`pow(5, -4): expect -> 0.0016: actual -> ${pow(5, -4)}`);
