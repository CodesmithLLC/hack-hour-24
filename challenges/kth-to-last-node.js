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
// Store values of each node into list
  let list = [];
  let currentNode = head;

// Check to see if there are more nodes 
  while (currentNode.next !== null) {
    list.push(currentNode);
    currentNode = currentNode.next;
  }
// Pass in last element - breaks out of while loop without adding it
  list.push(currentNode);

  return list[list.length - k];
}

function kthToLastNode2(k, head) {
// Create 2 pointer variables keeping track of the head (current)
  let pointer1, pointer2 = head;
// Advance pointer1 by k elements
// Create a second pointer variable that starts k elements behind head
  for (let i = 0; i < k; i++) {
    pointer1 = pointer1.next;
  }
// Pointer2 will be k elements behind pointer1 (tail)
  while (pointer1.next !== null) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer2;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
