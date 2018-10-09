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
    let prev = null;
    let cur = head;
    while(cur != null) {
        let more = cur.next;
        cur.next = prev;
        prev = cur;
        cur = more;
    }
    return prev;
}

let node1 = new Node(1);
let node2 = new Node(2);
node1.next = node2;
let node3 = new Node(3);
node2.next = node3;

function traverse(head) {
    let cur = head;
    while (cur != null) {
        console.log(cur.value);
        cur = cur.next;
    }
}
traverse(node1);
let newHead = reverseLinkedList(node1);
traverse(newHead);

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
