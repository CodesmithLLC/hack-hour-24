/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // Initialize Stack with empty store, length: 0 and max: negative infinity
  this.store = {};
  this.length = 0;
  this.max = Number.NEGATIVE_INFINITY;
}

Stack.prototype.push = function push(el) {
  // Push value into store, incrementing length by 1
  this.store[this.length] = el;
  this.length += 1;
  // if element is greater than current max, element becomes max
  this.max = el > this.max ? el : this.max;
  return this.length;
};

Stack.prototype.pop = function pop() {
  // Edge case: Return undefined if length is zero
  if (!this.length) return undefined;
  // Otherwise decrement length, storing last value in popEl
  this.length -= 1;
  const popEl = this.store[this.length];
  delete this.store[this.length];
  // Reset Max if current max was popped
  if (popEl === this.max) this.resetMax();
  return popEl;
};

Stack.prototype.resetMax = function resetMax() {
  // Return the max of current values and negative infinity (if no values)
  this.max = Math.max(...Object.values(this.store), Number.NEGATIVE_INFINITY);
  return this.max;
};

Stack.prototype.getMax = function getMax() {
  return this.max;
};

module.exports = Stack;

// console.log('---TESTING STACK---');
// const myStack = new Stack();
// console.log(myStack.getMax());
// console.log(myStack.pop());
// console.log(myStack.push(5));
// console.log(myStack.push(20));
// console.log(myStack.push(10));
// console.log(myStack.push(15));
// console.log(myStack.pop());
// console.log(myStack);
// console.log(myStack.getMax());
// console.log(myStack.push(25));
// console.log(myStack.getMax());
// console.log(myStack.pop());
// console.log(myStack.getMax());
