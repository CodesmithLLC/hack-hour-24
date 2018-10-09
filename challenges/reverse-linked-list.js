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
    let prev = head;

    // checks if no head
    if (!prev) return prev;

    let curr = head.next;
    let temp;
    prev.next = null;

    // using runner technique
    while (curr) {
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}

let n1 = new Node(1);

console.log(n1);
console.log(reverseLinkedList(n1));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
