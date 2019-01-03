/**
 * Create a stack.Then create a queue using two stacks.
 */


class Stack {
  constructor(){
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    this.items.pop();
  }

  rtrn() {
    return this.items;
  }
}

const newStack = new Stack;

newStack.push(4);
newStack.push(4);
newStack.pop(4);
console.log(newStack.rtrn());

/**
* Queue Class
*/


function Queue() {
  const stackA = new Stack;
  const stackB = new Stack;
  
}

module.exports = {Stack: Stack, Queue: Queue};
