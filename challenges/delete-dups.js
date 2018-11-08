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

// function deleteDups(head) {
 
// }

// 3->5->9->5->4->5
function deleteDups(head) {
  var current = head,
    arr = [],
    prev,
    next;
  // till the end item is not null
  while (current.next != null) {

    if (arr.indexOf(current.value) === -1) {
      arr.push(current.value);
    } else {
      if (prev) {
        prev.next = current.next;
      }
    }
    prev = current;
    current = current.next;
  }

  if (current.next == null) {
    if (arr.indexOf(current.value) !== -1) {
      prev.next = null;
    }
  }
  console.log(head);
  return head;
}

function Node(val) {
  this.value = val;
  this.next = null;
}
let l1 = new Node(3);
l1.next = new Node(8);
l1.next.next = new Node(6);

l1.next.next.next = new Node(8);
// l1.next.next.next.next = new Node(8);

// console.log(JSON.stringify(l1))
console.log(JSON.stringify(deleteDups(l1)));
module.exports = deleteDups;
