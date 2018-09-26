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
  this.add = function(val) {
    let newNode = new Node(val);
    this.next = newNode;
    return newNode;
  }
}

function kthToLastNode(k, head) {
  // move k positions
  if (k === 0)
    return;

  let follow = head;
  let i = k;
  
  while (i > 0 && head.next) {
    head = head.next;
    i--;
  }
  
  if (i > 0)
    return;

  while (head.next) {
    head = head.next;
    follow = follow.next;
  }

  return follow;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
