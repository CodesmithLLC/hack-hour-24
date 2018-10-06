/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.contents = {};
  this.length = 0;
  this.maxArray = [];
}

Stack.prototype.push = function push(el) {
  this.contents[this.length] = el;
  this.maxArray = Object.values(this.contents).sort((a, b) => (a - b));
  this.length += 1;
  return this.length;
};

Stack.prototype.pop = function pop() {
  if (this.length > 0) {
    this.length -= 1;
    const popEl = this.contents[this.length];
    delete this.contents[this.length];
    this.maxArray = Object.values(this.contents).sort((a, b) => (a - b));
    return popEl;
  }
  return undefined;
};

Stack.prototype.getMax = function getMax() {
  return this.length ? this.maxArray[this.length - 1] : undefined;
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
