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

function nodeCounter(head, counter = 1) {
  if (head.next === null) {
    return counter;
  }
  return nodeCounter(head.next, counter + 1);
}

function kthToLastNode(k, head) {
  let nodeMax = nodeCounter(head);
  if(k > nodeMax) {
    return head;
  }
  nodeMax -= k;
  for(let i = 0; i < nodeMax; i++) {
    head = head.next;
  }
  return head.value;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2 ,a));
module.exports = {Node: Node, kthToLastNode: kthToLastNode};

