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
  const set = new Set();
  let safe = head, curr = head;

  while (curr) {
    if (set.has(curr.value)) {
      safe.next = curr.next;
    } else {
      set.add(curr.value);
      safe = curr;
    }
    curr = curr.next;
  }
  return head;
}

module.exports = deleteDups;

const head = new Node(1);
const two = new Node(1);
const three = new Node(3);
const threeAgain = new Node(3);

head.next = two;
two.next = three;
three.next = threeAgain;

console.log(deleteDups(head))

// let listHistory = '';
// let curr = head;

// while (curr.next !== null) {
//   if (listHistory.includes(curr.value)) {

//   }

//   listHistory += curr.value;
//   curr = curr.next;
// }
// return true;