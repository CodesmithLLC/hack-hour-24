// /**
//  * Create a stack.Then create a queue using two stacks.
//  */

// function Stack() {
//   this.elements = [];
// }

// Stack.prototype.push = function(ele) {
//   this.elements.push(ele);
// };

// Stack.prototype.pop = function() {
//   return this.elements.pop();
// };

// Stack.prototype.peak = function() {
//   return this.elements[this.elements.length - 1];
// };

// Stack.prototype.isEmpty = function() {
//   return this.elements.length === 0;
// };

// /**
//  * Queue Class
//  */

// function Queue() {
//   this.pushStack = new Stack();
//   this.popStack = new Stack();
//   this.pushMode = true;
// }

// Queue.prototype.push = function(ele) {
//   if (!this.pushMode) {
//     this.pushMode = true;
//     while (!this.popStack.isEmpty()) {
//       this.pushStack.push(this.popStack.pop());
//     }
//   }
//   this.pushStack.push(ele);
// };

// Queue.prototype.pop = function() {
//   if (this.pushMode) {
//     this.pushMode = false;
//     while (!this.pushStack.isEmpty()) {
//       this.popStack.push(this.pushStack.pop());
//     }
//   }
//   return this.popStack.pop();
// }

// Queue.prototype.peakFront = function() {
//   if (this.pushMode) {
//     this.pushMode = false;
//     while(!this.pushStack.isEmpty()){
//       this.popStack.push(this.pushStack.pop());
//     }
//   }
//   return this.popStack.peak();
// }

// Queue.prototype.peakBack = function() {
//   if (!this.pushMode) {
//     this.pushMode = true;
//     while(!this.popStack.isEmpty()) {
//       this.pushStack.push(this.popStack.pop());
//     }
//   }
//   return this.pushStack.peak();
// }

// const testQueue = new Queue;
// testQueue.push(1);
// testQueue.push(3);
// testQueue.push(2);
// console.log(testQueue.pop()); // 1
// testQueue.push(5);
// console.log(testQueue.pop());  // 3
// console.log(testQueue.pop());  // 2
// testQueue.push(10);
// testQueue.push(1);
// console.log(testQueue.peakFront()); // 5
// console.log(testQueue.peakFront()); // 5
// console.log(testQueue.peakBack()); // 1
// console.log(testQueue.peakBack()); // 1

const testArr = [2, 3, -1, 7]

function subsetSum(arr, goal, i=0) {
  if (goal === 0) { return true; }
  if (i < arr.length) {
    return subsetSum(arr, goal - arr[i], i + 1) || subsetSum(arr, goal, i + 1);
  }
  return false;
}

console.log(subsetSum(testArr, 0));