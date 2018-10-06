/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {};
  this.index = 0;
}

Stack.prototype.top = undefined;
Stack.prototype.push = function push(val) {
  this.storage[this.index] = val;
  this.index += 1;

  // if (this.top === undefined || val > this.top) {
  //   this.top = val;
  // }

  return this.index;
};
Stack.prototype.pop = function pop() {
  this.index -= 1;
  const temp = this.storage[this.index];
  delete this.storage[this.index];

  // if (this.top === this.storage[this.index]){
    // I still have to use O(n) here...
  //   this.top = Math.max()
  // }
  
  return temp;
};
Stack.prototype.getMax = function max() {

  // but Object.keys, Object.values are O(n).......
  return Math.max(...Object.values(this.storage));

  // return this.top;
};
const newS = new Stack();
newS.push(2);
newS.push(50);
newS.push(12);
newS.pop();
newS.pop();
console.log(newS.getMax())

module.exports = Stack;