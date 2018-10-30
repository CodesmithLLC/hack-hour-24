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
  // create a carry number
  let carry = 0;
  let curr = l1;
  let curr2 = l2;
  let l3;
  let curr3;
  let sum;
  let arr = [];
  while (curr && curr2) {
    sum = curr.value + curr2.value;
    if (sum > 9) {
      carry = 1;
      sum = sum - 10;
      arr.push(sum);
    } else {
      arr.push(carry + curr.value + curr2.value);
      carry = 0;
    }
    curr = curr.next;
    curr2 = curr2.next;
  }
  while (curr) {
    arr.push(carry + curr.value);
    carry = 0;
    curr = curr.next;
  }
  while (curr2) {
    arr.push(carry + curr2.value);
    carry = 0;
    curr2 = curr2.next;
  }
  while (arr.length > 0) {
    let newGuy = new Node(arr.shift());
    // console.log(newGuy);
    if (!l3) {
      l3 = newGuy;
      curr = newGuy;
    } else {
      curr.next = newGuy;
      curr = curr.next;
    }
  }
  return l3;
}

// let l1 = new Node(2);
// l1.next = new Node(1);
// l1.next.next = new Node(5);
// // l1.next.next.next = new Node(7);


// let l2 = new Node(5);
// l2.next = new Node(9);
// l2.next.next = new Node(2);

// console.log(addLinkedList(l1, l2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
