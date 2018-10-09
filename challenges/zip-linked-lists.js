/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

const a = new Node('A');
const c = new Node('C');
const e = new Node('E');
a.next = c;
c.next = e;

const b = new Node('B');
const d = new Node('D');
const f = new Node('F');
b.next = d;
d.next = f;

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  // if the first node of the first list doesn't exist, return second list
  if (!l1) return l2;

  //
  let prevNodePointer = l1, currentNodePointer = l1;

  while (prevNodePointer.next !== null && currentNodePointer !== null) {
    currentNodePointer = 
  }
};

module.exports = {Node: Node, zip: zip};

// console.log(zip(a, b));
