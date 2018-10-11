/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

class Stack {
  // body...
  constructor() {
    this.items = [];
    this.maxStack = [];
  }

  push(newItem) {
    this.maxStack.push(newItem);
    this.maxStack.sort((a, b) => b - a);
    this.items.push(newItem);
    return this.items.length;
  }

  pop() {
    const temp = this.items.pop();
    if (temp === this.maxStack[0]) {
      this.maxStack.shift();
    }
    return temp;
  }

  getMax() {
    return this.maxStack[0];
  }
}

module.exports = Stack;
