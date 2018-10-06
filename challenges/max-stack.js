/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  let obj = {};
  let length = 0;
  let max = Number.MIN_SAFE_INTEGER;

  this.push = (value) => {
    max = Math.max(value, max);
    obj[length++] = { value, max }
  }
  this.pop = () => {
    let ret = obj[--length].value;
    max = obj[length - 1].max;
    return ret;
  }
  this.getMax = () => {
    return max;
  }
}

let s = new Stack();
s.push(1);
s.push(3);
console.log(s.getMax());
s.push(2);
console.log(s.pop());
console.log(s.getMax());

module.exports = Stack;