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
    // check if the linked list is only one value
    if (head.next === null) return head;
    let promotion = false;
    let decapitated = false;
    // iterate through the linked list
    let currNode = head;
    let tempNode;

    while (promotion === false) {
        // at head, store next, store value, change next to null
        if (decapitated === false) {
            // head becomes tail
            let tempNode = currNode;
            currNode.next = null;
            currNode = tempNode.next;
            decapitated = true;
        }
        else if (currNode.next = null) {
            currNode.next = tempNode;
            promotion = true;
        }
        else {
            currNode.next = tempNode;
            tempNode = currNode;
            currNode = tempNode.next;
        }
    }
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
