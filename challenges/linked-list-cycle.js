/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if the linked list has a cyclical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

let Node = function (value) {
  this.value = value;
  this.next = null;
};

function hasCycle(head) {
  if (!head) return false;
  const store = new Set();
  let currNode = head;
  store.add(currNode);
  if (currNode.next) {
    currNode = currNode.next;
    if (store.has(currNode)) {
      return true;
    }
    store.add(currNode);
  }
  return false;
}









// function hasCycle(head) {
//   // edge cases
//   if (!head || !head.next) return false;
//   // declare vars
//   let tortoise = head;
//   let hare = head.next;
//   // race our tortoise and hare
//   while (hare.next.next) {
//     if (tortoise === hare) return true;
//     tortoise = tortoise.next;
//     hare = hare.next.next;
//   }
//   return false;
// }


// var node1 = new Node('1');
// var node2 = node1.next = new Node('2');
// var node3 = node2.next = new Node('3');
// var node4 = node3.next = new Node('4');
// var node5 = node4.next = new Node('5');
// console.log(hasCycle(node1)); // => false
// node5.next = node2;
// hasCycle(node1); // => true

module.exports = { Node, hasCycle };
