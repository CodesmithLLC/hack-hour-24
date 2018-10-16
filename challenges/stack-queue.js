/**
 * Create a stack.Then create a queue using two stacks.
 */

//First in Last out
class Stack {
  constructor(){
    this.length = 0;
    this.contents = {};
  }
  push(value){
    this.contents[this.length] = value;
    this.length += 1;
    return this.length;
  }
  pop(){
    let returnValue = this.contents[this.length];
    del (this.contents[this.length]);
    this.length -= 1;
    return returnValue;
  }
}


/**
* Queue Class
*/

//First in First out
class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.length = 0;
  }
  push(value) {
    this.stack1.push(value);
    this.length += 1;
    return this.length;
  }
  pop(){
    let i = 0;
    if(this.stack2.length === 0){
      while(this.stack1.length > 0){
        this.stack2.push(this.stack1.pop());
      }
      return this.stack2.pop();
    } else{
      return this.stack2.pop();
    }
  }
}

module.exports = {Stack: Stack, Queue: Queue};
