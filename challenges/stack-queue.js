/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.index = 0;
}
Stack.prototype.push = function push(val) {
  this.storage[this.index] = val;
  this.index ++;
}
Stack.prototype.pop = function pop(val) {
  this.index --;
  const temp = this.storage[this.index];
  delete this.storage[this.index];
  return temp;
}

/**
* Queue Class
*/


function Queue() {
  this.storage1 = new Stack();
  this.storage2 = new Stack();

}
Queue.prototype.enqueue = function pu(val) {
  this.storage1.push(val)
}
Queue.prototype.dequeue = function pu(val) {

  // console.log(this.storage1,'1')
  // check if storage2 is empty, can't ignore this step...
  if (this.storage2.index === 0) {
    if (this.storage1.index === 0)  return undefined; 
    while (this.storage1.index > 0) {
      //  get rid of the last one in storage1, push it to storage2 as its first element
      const temp = this.storage1.pop();
      this.storage2.push(temp);
      // console.log(this.storage2,'2')
    }
  }
  return this.storage2.pop();
}
const testQ = new Queue();
testQ.enqueue(3);
testQ.dequeue();
testQ.enqueue(4);
testQ.enqueue(5);
testQ.enqueue(6);
testQ.dequeue();
testQ.dequeue();

// console.log(testQ)
module.exports = {Stack: Stack, Queue: Queue};
