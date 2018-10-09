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
  // Edge case, if list has length of one, return head
  if (!head.next) return head;
  // Set placeholder variables for the starting head and the following two nodes
  let currNode = head;
  let nextNode = head.next;
  let nextPlus = nextNode.next;
  // Set currNode.next to point at null (as if head were the tail)
  currNode.next = null;
  // Loop through the list as long as nextNode is not null
  while (nextNode) {
    // Reset nextNode to point at currNode (revering list order)
    nextNode.next = currNode;
    // Migrate currNode, nextNode and nextPlus one node each
    currNode = nextNode;
    nextNode = nextPlus;
    if (nextPlus) {
      // Note: nextPlus only migrates if it's not null
      nextPlus = nextPlus.next;
    }
  }
  // When nextNode is null, return currNode as the new head
  return currNode;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
