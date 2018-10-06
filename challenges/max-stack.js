/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.length = 0;
  this.storage = [];
  this.max;

  this.push = function(element) {
    if (!this.max || element > this.max) {
      this.max = element;
    }
    this.storage.push(element);
    return this.length++;
  };

  this.pop = function() {
    const removed = this.storage.pop();
    if (removed === this.max) {
      const copy = this.storage.slice().sort();
      this.max = copy.pop();
    }
    this.length--;
    return removed;
  };

  this.getMax = function() {
    return this.max;
  };
}

const newStack = new Stack();
newStack.push(3);
newStack.push(5);
newStack.push(6);
newStack.push(2);
newStack.push(4);
newStack.push(8);

console.log(newStack.storage);
console.log(newStack.getMax());

newStack.pop();
newStack.pop();
newStack.pop();
newStack.pop();

console.log(newStack.getMax());

module.exports = Stack;