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
  // const stack = [];

  // // If head is null, return null.
  // if (head === null) {
  //   return null;
  // }

  // // If there is only one node.
  // if (head.next === null) {
  //   return head;
  // }

  // let curNode = head;

  // // Loop through and push nodes onto stack.
  // while (curNode != null) {
  //   stack.push(curNode);
  //   curNode = curNode.next;
  // }

  // const newHead = stack.pop();
  // curNode = newHead;

  // // Loop through stack and rebuild linked list in reverse order.
  // while (stack.length !== 0) {
  //   const nextNode = stack.pop();
  //   curNode.next = nextNode;
  //   curNode = nextNode;
  // }

  // // Set tail node's next node to null.
  // curNode.next = null;

  // return newHead;

  // In place.
  let curNode = head;
  let prevNode = null;

  while (curNode !== null) {
    const temp = curNode.next;
    curNode.next = prevNode;
    prevNode = curNode;
    curNode = temp;
  }

  head = prevNode;
  return head;
}

// const node1 = new Node(1);
// const node2 = new Node(2);
// const node3 = new Node(3);

// node1.next = node2;
// node2.next = node3;

// console.log(node1);

// console.log(reverseLinkedList(node1));

module.exports = { Node, reverseLinkedList };
