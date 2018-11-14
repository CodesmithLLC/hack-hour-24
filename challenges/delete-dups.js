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
  let cur = head;

  while (cur != null) {
    console.log(cur.value);
    let cursor = cur.next;
    let cursor_prev = cur;
    while (cursor != null) {
      if (cur.value === cursor.value)
        cursor_prev.next = cursor.next;
      cursor_prev = cursor;
      cursor = cursor.next;
    }
    cur = cur.next;
  }
  return head;
}

let head = new Node(1);
let cur = head;
cur.next = new Node(2);
cur = cur.next;
cur.next = new Node(3);
cur = cur.next;
cur.next = new Node(2);
cur = cur.next;
cur.next = new Node(3);
cur = cur.next;
cur.next = new Node(4);
cur = cur.next;
cur.next = new Node(1);
let result = deleteDups(head);
console.log(result);
module.exports = deleteDups;
