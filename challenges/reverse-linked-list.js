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

let prevVal, nextVal;

function reverseLinkedList(head) {
    if (!prevVal) prevVal = null;
    nextVal = head.next
    if (head.next) {
        head.next = prevVal;
        prevVal = head
        reverseLinkedList(nextVal)
    }
}



module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
