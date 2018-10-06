/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.array = [];
  this.max;
  this.push = (val) => {
    if (this.max === undefined || val > this.max) {
      this.max = val;
    }
    const next = this.array.length;
    this.array[this.array.length] = val;
    return next + 1;
  }
  this.pop = () => {
    if (this.array.length > 0) {
      const lastVal = this.array.slice(-1)[0];
      this.array = this.array.slice(0, this.array.length - 1);
      // If the max was popped off, find the max from the remaining stack.
      if (lastVal === this.max) this.setMax();
      return lastVal;
    }
  }
  this.getMax = () => {
    return this.max;
  }
  this.setMax = () => {
    let max;

    for (let i = 0; i < this.array.length; i += 1) {
      if (max === undefined || this.array[i] > max) {
        max = this.array[i];
      }
    }
    this.max = max;
  }
}

// const stack = new Stack();
// console.log(stack);
// console.log(stack.push(1));
// console.log(stack.push(2));
// console.log(stack.push(8));
// console.log(stack.push(3));
// console.log(stack);
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.getMax());
// console.log(stack);

module.exports = Stack;