/**
 * Create a stack. Then create a queue using two stacks.
 */


class Stack {
  constructor() {
    this.store = {};
    this.length = 0;
  }

  push(el) {
    this.store[this.length] = el;
    this.length += 1;
    return this.length;
  }

  pop() {
    // Edge Case - Stack is empty
    if (!this.length) return undefined;
    // Otherwise, grab, delete and return most recent item from the stack
    this.length -= 1;
    const popVal = this.store[this.length];
    delete this.store[this.length];
    return popVal;
  }
}

/**
* Queue Class
*/

class Queue {
  constructor() {
    // Create an entry object and an exit object - both stacks
    this.enterStack = new Stack();
    this.exitStack = new Stack();
  }

  enqueue(el) {
    // If needed, empty the exit object into the entry object
    while (this.exitStack.length > 0) {
      this.enterStack.push(this.exitStack.pop());
    }
    // Push the enqueued element on to the entry object
    this.enterStack.push(el);
    return this.enterStack.length;
  }

  dequeue() {
    // Edge case - both stacks are empty
    if (!this.enterStack.length && !this.exitStack.length) return undefined;
    // Otherwise, empty the entry object into the exit object
    while (this.enterStack.length > 0) {
      this.exitStack.push(this.enterStack.pop());
    }
    // Return the latest addition to the exit object (the first addition to entry)
    return this.exitStack.pop();
  }
}

module.exports = {Stack: Stack, Queue: Queue};

// console.log('Testing Stack');
// const newStack = new Stack();
// console.log(newStack.push('a'));
// console.log(newStack.push('b'));
// console.log(newStack.push('c'));
// console.log(newStack.pop());
// console.log(newStack.pop());

// console.log('Testing Queue');
// const newQueue = new Queue();
// console.log(newQueue.enqueue('a'));
// console.log(newQueue.enqueue('b'));
// console.log(newQueue.enqueue('c'));
// console.log(newQueue.dequeue());
// console.log(newQueue.dequeue());
// console.log(newQueue.enqueue('d'));
// console.log(newQueue.enqueue('e'));
// console.log(newQueue.dequeue());
