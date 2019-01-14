/**
 * Create a stack.Then create a queue using two stacks.
 */


class Stack {
  constructor() {
    this.items = {};
    this.length = 0;
  }

  push(element) {
    this.items[this.length] = element;
    this.length += 1;
    return this.length;
  }

  pop() {
    if (!this.length) return undefined;
    this.length -= 1;
    const item = this.items[this.length];
    delete this.items[this.length];
    return item;
  }
}

/**
* Queue Class
*/


class Queue {
  constructor() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
  }

  enqueue(elem) {
    while (this.popStack.length > 0) {
      this.pushStack.push(this.popStack.pop());
    }
    this.pushStack.push(elem);
    return this.pushStack.length;
  }

  dequeue() {
    while (this.pushStack.length > 0) {
      this.popStack.push(this.pushStack.pop());
    }
    return this.popStack.pop();
  }
}

let myQueue = new Queue;
myQueue.enqueue('a')
myQueue.enqueue('b')
myQueue.enqueue('c')
console.log(myQueue.dequeue());

module.exports = {Stack: Stack, Queue: Queue};
