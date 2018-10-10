/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = {};
  this.index = 0;
  this.max = [];
}

Stack.prototype.push = function(num) {
  if (this.max.length === 0 || num >= this.max[this.max.length-1]) {
    this.max.push(num);
  }
  this.stack[this.index] = num;
  this.index += 1;
  return this.index;
}

Stack.prototype.pop = function() {
  if (this.stack[this.index - 1] === this.max[this.max.length-1]) {
    this.max.pop();
  }
  this.index -= 1;
  let returnVal = this.stack[this.index];
  delete this.stack[this.index];
  return returnVal;
}

Stack.prototype.return = function() {
  return this.stack;
}

Stack.prototype.getMax = function() {
  return this.max[this.max.length - 1];
}

let newStack = new Stack();


module.exports = Stack;