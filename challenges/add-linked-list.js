/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let carryOver = 0;
  let cur = null;
  let head = null;
  while (l1 != null || l2 != null) {
    let digitSum = ((l1 !== null)? l1.value : 0) + ((l2 !== null)? l2.value : 0) + carryOver;
    carryOver = (digitSum >= 10) ? 1 : 0;

    if (cur === null)
      head = cur = new Node(digitSum % 10);
    else {
      cur.next = new Node(digitSum % 10);
      cur = cur.next;
    }

    if (l1 != null)
      l1 = l1.next;
    if (l2 != null)
      l2 = l2.next;
  }
  return head;
}

function printOut(list) {
  let cur = list;
  while(cur != null) {
    console.log(cur.value, " -> ");
    cur = cur.next;
  }
}
let l1 = new Node(2);
let cur1 = l1;
cur1.next = new Node(1);
cur1 = cur1.next;
cur1.next = new Node(8);
cur1 = cur1.next;
cur1.next = new Node(5);
cur1 = cur1.next;
let l2 = new Node(5);
let cur2 = l2;
cur2.next = new Node(9);
cur2 = cur2.next;
cur2.next = new Node(2);
cur2 = cur2.next;
printOut(addLinkedList(l1, l2));
module.exports = { Node: Node, addLinkedList: addLinkedList };
