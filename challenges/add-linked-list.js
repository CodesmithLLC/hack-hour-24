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

function addLinkedList(ll1, ll2) {
  let pointer1 = ll1;
  let pointer2 = ll2;
  while (pointer1 && pointer2) {
    const sum = pointer1.value + pointer2.value;
    if (sum >= 10) {
      pointer1.value = sum - 10;
      if (pointer1.next) {
        pointer1.next.value += 1;
      } else {
        pointer1.next = new Node(1);
      }
    } else {
      pointer1.value = sum;
    }
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return ll1;
}
const test1 = new Node(7);
test1.next = new Node(9);
test1.next.next = new Node(4);
test1.next.next.next = new Node(3);

const test2 = new Node(4);
test2.next = new Node(9);
test2.next.next = new Node(1);
test2.next.next.next = new Node(5);



console.log(addLinkedList(test1, test2));
module.exports = {Node: Node, addLinkedList: addLinkedList};
