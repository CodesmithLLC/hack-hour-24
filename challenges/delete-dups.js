/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function deleteDups(head) {
  let listHistory = '';
  let ptr = head;

  while (ptr !== null) {
    if (listHistory.includes(ptr.value)) return false;
    listHistory += ptr.value;
    ptr = ptr.next;
  }
  return true;
}

module.exports = deleteDups;

const head = new Node(1);
const two = new Node(2);
const three = new Node(3);
const threeAgain = new Node(3);

head.next = two;
two.next = three;
three.next = threeAgain;

console.log(deleteDups(head))