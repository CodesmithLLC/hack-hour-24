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
  // construct the linked list
  // let llist = new Node('A');
  // llist.add('B').add('C').add('D').add('E');
  // get the length
  let cur = head;
  let llistLen = 0;
  
  while (cur != null) {
    cur = cur.next;
    llistLen ++;
  }
  cur = head;
  for (let i = 0; i < llistLen - k; i++) {
    cur = cur.next;
  }
  return cur.val;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
