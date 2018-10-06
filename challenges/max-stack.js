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
    this.length = 0;
    this.contents = {};
    this.max = Math.max();
  }

  push(elem) {
    this.contents[this.length] = elem;
    this.length += 1;
    if (elem > this.max) {
      this.max = elem;
    }
    return this.length;
  }

  pop() {
    const returnedValue = this.contents[this.length - 1];
    if (this.max === returnedValue) {
      delete this.contents[this.length - 1];
      this.max = Math.max(...Object.values(this.contents));
    } else {
      delete this.contents[this.length - 1];
    }
    this.length -= 1;
    return returnedValue;
  }

  getMax() {
    // let max = this.contents[0];
    // const contentsArr = Object.keys(this.contents);
    // for (let i = 0; i < contentsArr.length; i += 1) {
    //   if (this.contents[i] > max) {
    //     max = this.contents[i];
    //   }
    // }
    return this.max;
  }
}

const stack = new Stack();

console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));

console.log(stack.pop());
console.log(stack.getMax());
console.log(stack.push(8));
console.log(stack.getMax());
stack.pop();
console.log(stack.contents);
console.log(stack.getMax());

module.exports = Stack;
