/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = [];
  this.max = {
    value: 0,
    index: 0,
  };
}

Stack.prototype.push = function push(element) {
  this.stack[this.stack.length] = element;
  if (element > this.max.value) {
    this.max.value = element;
    this.max.index = this.stack.length - 1;
  }
  return this.stack.length;
};

Stack.prototype.pop = function pop() {
  const index = this.stack.length - 1;
  const output = this.stack[this.stack.length - 1];
  this.stack.length = this.stack.length - 1;
  if (index === this.max.index) {
    this.max.value = 0;
    for (let i = 0; i < this.stack.length; i += 1) {
      if (this.stack[i] > this.max.value) {
        this.max.value = this.stack[i];
        this.max.index = i;
      }
    }
  }

  return output;
}

Stack.prototype.getMax = function getMax() {
  return this.max.value;
};

module.exports = Stack;