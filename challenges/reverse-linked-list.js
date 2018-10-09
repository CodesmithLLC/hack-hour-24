/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
  this.value = value;
  this.next = null;
}

function reverseLinkedList(head) {
  let thisNode = head;
  let prevNode = head;

  while (thisNode !== null) {

    // save reference to next node before reassigning our current nodes next property
    const nextNode = thisNode.next;
    
    // if this is our original head, set its next value to 'null'
    if (thisNode === head) {
      thisNode.next = null;
    
      // otherwise set next property to the previous node and reassign previous node
    } else {
      thisNode.next = prevNode;
      prevNode = thisNode;
    }

    // move on to the next node
    thisNode = nextNode;
  }
  // return our prevNode, which is our 'new head'
  return prevNode;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
a.next = b;
b.next = c;

// const result = reverseLinkedList(a);
// console.log(result);