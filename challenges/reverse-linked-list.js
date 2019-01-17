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
  if (!head) { return head; }
  if (!head.next) { return head; }
  let curr = head;
  let { next } = head;
  let nextNext = next.next;

  curr.next = null;
  next.next = curr;

  while (nextNext) {
    curr = next;
    next = nextNext;
    nextNext = next.next;

    next.next = curr;
  }
  return next;
}

module.exports = { Node, reverseLinkedList };
