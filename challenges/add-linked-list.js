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
  // check edge cases
  if (l1.next === null && l2.next === null) {
    return new Node(l1.value + l2.value);
  }
  else if (l2.next === null) {
    l1.value = l1.value + l2.value;
    return l1;
  }
  else if (l1.next === null) {
    l2.value = l1.value + l2.value;
    return l2;
  }
  else {
    let result = new Node(undefined);
    // iterate through the linked list
    // while next !== null
    let l1Curr = l1;
    let l2Curr = l2;
    let resultCurr = result;
    console.log(resultCurr);
    while (l1Curr.next !== null && l2Curr.next !== null) {
      // add the this. values together and assign them to a new list? or rebuild one of the lists?
      resultCurr.value = l1Curr.value + l2Curr.value;
      // update the curr value to be next
      l1Curr = l1Curr.next;
      l2Curr = l2Curr.next;
      resultCurr = resultCurr.next;
    }
    // if (l1Curr.next !== null && l2Curr.next === null) {
    //   return l1;
    // }
    // if (l1Curr.next === null && l2Curr.next !== null) {
    //   l1Curr.next === l2Curr.next;
    //   return l1Curr;
    // }
   
      return result;
  }
}

let test1 = new Node(2);
test1.next = new Node(1);
test1.next.next = new Node(5);

let test2 = new Node(5);
test2.next = new Node(9);
test2.next.next = new Node(2);

console.log(addLinkedList(test1, test2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
