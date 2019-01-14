/**
 * Create a stack.Then create a queue using two stacks.
 */


class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    return this.items.push(element);
  }

  pop() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
    return undefined;
  }

  rtrn() {
    return this.items;
  }
}



/**
* Queue Class
*/


class Queue {
  constructor() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
    this.mode = 'push';
  }

  enqueue(elem) {
    if (this.mode === 'pop') {
      while (this.popStack.length > 0) {
        this.pushStack.push(this.popStack.pop());
      }
      this.mode = 'push';
    }
    if (this.mode === 'push') {
      this.pushStack.push(elem);
    }
  }

  dequeue() {
    if (this.mode === 'push') {
      while (this.pushStack.length > 0) {
        this.popStack.push(this.pushStack.pop());
      }
      this.mode = 'pop';
    }
    return this.popStack.pop();
  }
}

const newQueue = new Queue();
console.log(newQueue.enqueue);

newQueue.enqueue(3);
newQueue.enqueue(5);
newQueue.enqueue(7);
newQueue.dequeue();
console.log(newQueue.dequeue());
newQueue.enqueue(9);
newQueue.enqueue(11);
newQueue.dequeue();
console.log(newQueue.dequeue());

module.exports = {Stack: Stack, Queue: Queue};
