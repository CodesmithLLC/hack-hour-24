/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  // body...
  this.array = [];
  this.push = (val) => {
    const next = this.array.length;
    this.array[this.array.length] = val;
    return next + 1;
  };
  this.pop = () => {
    if (this.array.length > 0) {
      const lastVal = this.array.slice(-1)[0];
      this.array = this.array.slice(0, this.array.length - 1);
      return lastVal;
    }
  };
}


/**
* Queue Class
*/


function Queue() {
  this.enqueue = new Stack();
  this.dequeue = new Stack();

  // Remove item from beginning of array.
  this.shift = () => {
    if (this.dequeue.array.length !== 0) {
      return this.dequeue.pop();
    }

    while (this.enqueue.array.length !== 0) {
      this.dequeue.push(this.enqueue.pop());
    }

    if (this.dequeue.array.length !== 0) {
      return this.dequeue.pop();
    }
  };

  // Add new item to beginning of array.
  this.unshift = (val) => {
    this.enqueue.push(val);
  };
}

// const queue = new Queue();
// queue.unshift(1);
// queue.unshift(2);
// queue.unshift(3);
// console.log(queue.shift());
// console.log(queue.shift());
// console.log(queue.shift());
// console.log(queue);

// const stack = new Stack();
// stack.push(1);
// console.log(stack);
// stack.push(2);
// console.log(stack);
// console.log(stack.pop());
// console.log(stack);

module.exports = { Stack, Queue };
