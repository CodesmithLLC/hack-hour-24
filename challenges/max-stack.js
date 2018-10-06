/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
  this.max = undefined;
}
Stack.prototype.push = function push(val) {
  this.storage[this.index] = val;
  this.index += 1;
  if (this.max === undefined) {
    this.max = val;
  } else if (val > this.max) {
    this.max = val;
  }
  return val;
};

Stack.prototype.pop = function pop() {
  const returnVal = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index -= 1;
  if (this.max === returnVal && this.index === 1) {
    this.max = undefined;
  } else if (this.max === returnVal) {
    const values = Object.values(this.storage);
    this.max = Math.max(...values);
  }
  return returnVal;
};

Stack.prototype.getMax = function getMax() {
  return this.max;
};

module.exports = Stack;