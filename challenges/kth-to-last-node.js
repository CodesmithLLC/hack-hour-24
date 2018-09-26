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
  //cache the values of the linkedlist into an array
  let array = [];
  //passing a variable to the head so we can use the variable to lopp through the linked list
  let currNode = head;

  //iterate through the linked list and cache every value
  while (currNode.next != null) {
    array.push(currNode.value);
    currNode = currNode.next;
  }
  //this is a grab because the while loop ends before i can get the last value one
  array.push(currNode.value);
  //deliver k spaces from the end of the array
  return array[(array.length) - k];
  
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
