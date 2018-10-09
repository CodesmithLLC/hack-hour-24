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

Stack.prototype.trackS = new Stack();
// Stack.prototype.top = undefined;

Stack.prototype.push = function push(val) {
  this.storage[this.index] = val;
  this.index += 1;
  console.log(this.trackS)
  // if (this.trackS.index === 0 || val > this.trackS.storage[this.trackS.index - 1]) {
  //   this.trackS.push(val);
  //   // console.log(this.trackS)
  // }
  // let big = val > this.trackS.storage[this.trackS.index - 1] ? val : this.trackS.storage[this.trackS.index - 1];
  // if (big === undefined) {
  //   big = val;
  // }
  // this.trackS.push(big);
  // console.log('hi');

  return this.index;
};
Stack.prototype.pop = function pop() {
  this.index -= 1;
  const temp = this.storage[this.index];
  delete this.storage[this.index];
  delete this.trackS[this.index];
  // if (this.top === this.storage[this.index]){
    // I still have to use O(n) here...
  //   this.top = Math.max()
  // }
  console.log('hi')
  return temp;
};
Stack.prototype.getMax = function max() {

  // but Object.keys, Object.values are O(n).......
  // return Math.max(...Object.values(this.storage));

  // return this.top;
  console.log(this.trackS)
  return this.trackS[0]
};
const newS = new Stack();
newS.push(2);
newS.push(50);
newS.push(12);
newS.push(0);

newS.pop();
// newS.pop();
console.log(newS.getMax())

module.exports = Stack;