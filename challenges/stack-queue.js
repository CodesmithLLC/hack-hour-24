/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.length = 0;

  this.push = function(ele) {
    this.storage.push(ele);
    this.length += 1;
    // console.log(this.storage);
    return this.length;
  }

  this.pop = function() {
    let removed = this.storage.pop();
    this.length -= 1;
    // console.log(this.storage);
    return removed;
  }
}


/**
* Queue Class
*/


function Queue() {
  this.length = 0;

  let stack1 = new Stack();
  let stack2 = new Stack();

  this.push = function(ele) {
    stack1.push(ele);
    this.length += 1;
    console.log(stack1.storage);
    return this.length;
  }

  this.shift = function() {
    while (stack1.length > 0) {
      stack2.push(stack1.pop());
    }
    let removed = stack2.pop();
    while (stack2.length > 0) {
      stack1.push(stack2.pop());
    }
    console.log(stack1.storage);
    this.length -= 1;
    return removed;
  }
}

const queue1 = new Queue();
queue1.push('a');
queue1.push('b');
queue1.push('c');
queue1.shift();
queue1.shift();
queue1.shift();

// const stack1 = new Stack();
// stack1.push('a');
// stack1.push('b');
// stack1.push('c');
// stack1.pop();
// stack1.pop();
// stack1.pop();


module.exports = {Stack: Stack, Queue: Queue};
