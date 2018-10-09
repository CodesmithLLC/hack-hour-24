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

// 

function reverseLinkedList(head) {
  let old = null;
  while (head) {
    let save = head.next;
    head.next = old;
    old = head;
    head = save;
  }
  return old;   
}

  
const l1 = new Node(1);
l1.next = new Node(2);
l1.next.next = new Node(3);
console.log(reverseLinkedList(l1))

// console.log(reverseLinkedList2(l1))

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
