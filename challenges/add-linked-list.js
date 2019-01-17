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
  let l1tracker = l1;
  let l2tracker = l2;
  let head = null;
  let prevNode = null;
  let carryOver = null;

  while (typeof l1tracker === 'number' || typeof l2tracker === 'number' || carryOver) {
    let sum = l1tracker.value + l2tracker.value + carryOver;
    carryOver = 0;
    if (sum > 9) {
      carryOver = 1;
      sum -= 10;
    }

    if (prevNode) {
      prevNode.next = new Node(sum);
      prevNode = prevNode.next;
    } else if (!head) {
      head = new Node(sum);
      prevNode = head;
    }
    l1tracker = l1tracker.next;
    l2tracker = l2tracker.next;
  }
  return head;



  // let total = 0;
  // let places = 0;
  // function actuallyAdd(LL) {
  //   countPlaces(LL);
  //   let placeTotal = LL.value;
  //   for (let i = 0; i < places; i += 1) {
  //     placeTotal *= 10;
  //   }
  //   places -= 1;
  //   total += placeTotal;
  //   if (this.next) {
  //     actuallyAdd(this.next);
  //   }
  // }
  // function countPlaces(LList) {
  //   if (LList.next) {
  //     places += 1;
  //     countPlaces(LList.next);
  //   }
  //   if (!LList.next) {
  //     actuallyAdd(LList);
  //   }
  // }
  // actuallyAdd(l1);
  // actuallyAdd(l2);
}

// const lla1 = new Node(3);
// const lla2 = new Node(3);
// const lla3 = new Node(3);
// lla1.next = lla2;
// lla2.next = lla3;

// const llb1 = new Node(2);
// const llb2 = new Node(2);
// const llb3 = new Node(2);
// llb1.next = llb2;
// llb2.next = llb3;


// console.log(addLinkedList(lla1, llb1));

module.exports = {Node: Node, addLinkedList: addLinkedList};
