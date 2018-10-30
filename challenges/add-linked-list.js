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
  // Create new pointers for arguments (avoid argument mutation)
  let currentL1 = l1;
  let currentL2 = l2;

  // Initialize carry and pointers to head and tail of output node
  let carry = 0;
  let newHead = null;
  let newTail = null;

  // Helper function to add two values and a carry and set the next carry
  const addAndCarry = (v1, v2, v3) => {
    if ((v1 + v2 + v3) >= 10) {
      // If value is greater than 10, reduce by 10 and set carry to 1
      carry = 1;
      return v1 + v2 + v3 - 10;
    }
    // If value is less than 10, set carry to 0
    carry = 0;
    return v1 + v2 + v3;
  };

  // If the current node of both lists exists
  while (currentL1 && currentL2) {
    // Create new node whose value is currentL1 + currentL2 + carry
    const newNode = new Node(addAndCarry(currentL1.value, currentL2.value, carry));

    // Set the node and update the tail
    if (newTail) {
      newTail.next = newNode;
      newTail = newNode;
    } else {
      // If this is the first new node (ones), point head and tail to it
      newHead = newNode;
      newTail = newNode;
    }

    // Increment the place on both nodes
    currentL1 = currentL1.next;
    currentL2 = currentL2.next;
  }

  // Once loop concludes, check if either l1 or l2 have value
  while (currentL1) {
    if (carry) {
      // If there is a carry, add it to currentL1.value and update carry
      currentL1.value = addAndCarry(currentL1.value, 0, carry);
    }
    // Increment the tail and the place on L1
    newTail.next = currentL1;
    newTail = currentL1;
    currentL1 = currentL1.next;
  }

  while (currentL2) {
    if (carry) {
      // If there is a carry, add it to currentL1.value and update carry
      currentL2.value = addAndCarry(0, currentL2.value, carry);
    }
    // Increment the tail and the place on L1
    newTail.next = currentL2;
    newTail = currentL2;
    currentL2 = currentL2.next;
  }

  // Check if carry still has value - if so, add one more node to the end and migrate tail
  if (carry) {
    newTail.next = new Node(1);
    newTail = newTail.next;
  }

  return newHead;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};

// console.log('---TESTING add-linkedlists---');
// const testL1 = new Node(4);
// testL1.next = new Node(6);
// testL1.next.next = new Node(8);
// const testL2 = new Node(4);
// testL2.next = new Node(6);
// testL2.next.next = new Node(8);
// console.log(addLinkedList(testL1, testL2));
