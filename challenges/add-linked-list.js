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
  // let curNode1 = l1;
  // let curNode2 = l2;
  // let carry = 0;
  // const total = [];

  // while (curNode1 !== null && curNode2 !== null) {
  //   const sum = curNode1.value + curNode2.value + carry;
  //   total.push(sum % 10);
  //   if (sum > 9) {
  //     carry = 1;
  //   } else {
  //     carry = 0;
  //   }
  //   curNode1 = curNode1.next;
  //   curNode2 = curNode2.next;
  // }

  // while (curNode1 !== null) {
  //   const sum = curNode1.value + carry;
  //   total.push(sum % 10);
  //   if (sum > 9) {
  //     carry = 1;
  //   } else {
  //     carry = 0;
  //   }
  // }

  const num1 = [];
  const num2 = [];

  let curNode1 = l1;
  let curNode2 = l2;

  while (curNode1 !== null) {
    num1.push(curNode1.value);
    curNode1 = curNode1.next;
  }

  while (curNode2 !== null) {
    num2.push(curNode2.value);
    curNode2 = curNode2.next;
  }

  const sum = (parseInt(num1.join(''), 10) + parseInt(num2.join(''), 10)).toString().split('');
  const head = new Node(sum.slice(-1)[0]);
  let curNode = head;

  for (let i = sum.length - 2; i >= 0; i -= 1) {
    curNode.next = new Node(sum[i]);
    curNode = curNode.next;
  }

  return head;
}

// const ll1 = new Node(2);
// const ll2 = new Node(1);
// const ll3 = new Node(5);

// ll1.next = ll2;
// ll2.next = ll3;

// const ll4 = new Node(5);
// const ll5 = new Node(9);
// const ll6 = new Node(2);

// ll4.next = ll5;
// ll5.next = ll6;

// console.log(ll1);
// console.log(ll4);
// console.log(addLinkedList(ll1, ll4));

module.exports = { Node, addLinkedList };
