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
  let length = 1;
  let currValue = head;
  let returnValue;
  while (currValue.next) {
    length += 1;
    currValue = currValue.next;
  }
  if (k > length) {
    return head.value;
  }
  currValue = head;
  const nextCounter = length - k;
  for (let i = 0; i <= nextCounter; i += 1) {
    returnValue = currValue.value;
    currValue = currValue.next;
  }
  return returnValue;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(kthToLastNode(6, a));