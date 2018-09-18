/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  // Declare array to cache Linked List values
  const valCache = [];

  // Loop through node, shifting values into cache
  while (head !== null) {
    valCache.unshift(head.value);
    head = head.next;
  }

  // Return the value at index 'k' at last, subtracting 1 to account for index 0
  return valCache[k - 1];
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

console.log('--TEST CASES--');
// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// console.log(`kthToLastNode(1, a): expect -> E: actual -> ${kthToLastNode(1, a)}`);
// console.log(`kthToLastNode(2, a): expect -> D: actual -> ${kthToLastNode(2, a)}`);
// console.log(`kthToLastNode(3, a): expect -> C: actual -> ${kthToLastNode(3, a)}`);
// console.log(`kthToLastNode(4, a): expect -> B: actual -> ${kthToLastNode(4, a)}`);
// console.log(`kthToLastNode(5, a): expect -> A: actual -> ${kthToLastNode(5, a)}`);
// console.log(`kthToLastNode(1, b): expect -> E: actual -> ${kthToLastNode(1, b)}`);
// console.log(`kthToLastNode(1, c): expect -> E: actual -> ${kthToLastNode(1, c)}`);
// console.log(`kthToLastNode(1, d): expect -> E: actual -> ${kthToLastNode(1, d)}`);
// console.log(`kthToLastNode(1, e): expect -> E: actual -> ${kthToLastNode(1, e)}`);
