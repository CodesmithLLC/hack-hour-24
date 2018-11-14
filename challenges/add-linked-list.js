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
  let ptr1 = l1, ptr2 = l2, sumPtr, carryover = 0;

  while (ptr1 !== null && ptr2 !== null) {

    const sum = ptr1.value + ptr2.value;
    console.log(sum);

    if (!sumPtr) {
      if (sum <= 9) {
        const newSumNode = new Node(sum);
        sumPtr = newSumNode;
      } else {
        carryover = (sum - (sum % 10)) / 10;
        console.log(carryover);
        const newSumNode = new Node(sum % 10);
        sumPtr = newSumNode;
      }
      console.log(sumPtr);
    } else {
      if (carryover + sum <= 9) {
        console.log(carryover);
        const newSumNode = new Node(sum + carryover);
        carryover = 0;
        sumPtr.next = newSumNode;
        console.log(sumPtr)
      } else {
        console.log(carryover);
        console.log(sum);
        const newSumNode = new Node((sum % 10) + carryover);
        console.log(newSumNode);
        carryover = (sum + carryover - (sum % 10)) / 10;
        // carryover = 0;
        sumPtr.next = newSumNode;
        console.log(sumPtr)
      }
      console.log(sumPtr);
    }
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }
  // if sum of nodes is less than 9, create new node and set sum value
  // if sum of nodes is greater than 9 and this.next exists, change this.next.value and possible this.next.next.value
  //if sum of nodes is greater than 9 and this.next DNE, create new node and store new values spread over how many places

  // if last node value is greater than 9, create a new node and store all but ones place
  return sumPtr;
}

module.exports = { Node: Node, addLinkedList: addLinkedList };

// ones - tens - hundreds

const l1n1 = new Node(2);
const l1n2 = new Node(4);
const l1n3 = new Node(6);
l1n1.next = l1n2;
l1n2.next = l1n3;

const l2n1 = new Node(1);
const l2n2 = new Node(3);
const l2n3 = new Node(5);
l2n1.next = l2n2;
l2n2.next = l2n3;

console.log(addLinkedList(l1n1, l2n1));