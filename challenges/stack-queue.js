/**
 * Create a stack.Then create a queue using two stacks.
 */


class Stack {

  constructor() {
    this.items = [];
    this.maxStack = [];
  }

  push(newItem) {
    this.maxStack.push(newItem);
    this.maxStack.sort((a, b) => b - a);
    this.items.push(newItem);
    return this.items.length;
  }

  pop() {
    const temp = this.items.pop();
    if (temp === this.maxStack[0]) {
      this.maxStack.shift();
    }
    return temp;
  } 
  
}


/**
* Queue Class
*/


function Queue() {

}

module.exports = {Stack: Stack, Queue: Queue};
