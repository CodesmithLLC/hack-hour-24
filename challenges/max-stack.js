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
  this.greatestNum = null;

  this.push = (...items) => {
    for (let i = 0; i < items.length; i += 1) {
      this.storage[this.index] = items[i];
      this.index += 1;
    }
    this.greatestNum = Math.max(...Object.values(this.storage));
  };

  this.pop = () => {
    const popped = this.storage[this.index - 1];
    delete this.storage[this.index - 1];
    this.index = this.index < 0 ? 0 : this.index - 1;
    this.greatestNum = Math.max(...Object.values(this.storage));
    return popped;
  };

  this.getMax = () => {
    // const sorted = Object.values(this.storage).sort((a, b) => b - a);
    // return sorted[0];

    // const storage = Object.values(this.storage);
    // return Math.max(...storage);
    console.log(Object.values(this.storage).indexOf(this.greatestNum));
    return this.greatestNum;
  };
}

module.exports = Stack;

const myStack = new Stack();
console.log(myStack.index);
console.log(myStack.storage);

myStack.push(1, 2, 3, 4, 5, 5, 5);
// myStack.push({ test2: 2 });
console.log(myStack.storage);
// console.log(myStack.storage[0]);
// console.log(myStack.index);

// console.log(myStack.pop());
console.log(myStack.getMax());