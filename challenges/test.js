// /**
//  * Write a function for reversing a linked list.
//  * Your function will have one input: the head of the list
//  * Your function should return the new head of the list
//  *
//  * BONUS:
//  * Do it in place
//  *
//  */

// function Node(value) {
//   this.value = value;
//   this.next = null;
// }

// function reverseLinkedList(head) {
//   let pointer = head;
//   let arr = [];
//   while (pointer) {
//     arr.push(pointer.value);
//     pointer = pointer.next;
//   }
//   arr.reverse();
//   const newHead = new Node(arr[0]);
//   arr = arr.slice(1);
//   pointer = newHead;
//   while (arr[0]) {
//     pointer.next = new Node(arr[0])
//     arr = arr.slice(1);
//     pointer = pointer.next;
//   }
//   return newHead;
// }

// function reverseLinkedList2(head) {

// }


// const l1 = new Node(1);
// l1.next = new Node(2);
// l1.next.next = new Node(3);
// console.log(reverseLinkedList(l1))

// // console.log(reverseLinkedList2(l1))

// module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
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


// 4-5-4-5
function deleteDups(head) {
  // if empty or only 1 node
  if (!head || !head.next) return head;
  let curr = head;
  let prev = head;
  const testSet = new Set();
  while (curr) {
    if (testSet.has(curr.value)) {
      // prev.next = curr.next;
      prev.next = curr.next;
      // console.log('c',curr,'p',prev)
    } else {
      testSet.add(curr.value);
      prev = curr;
      // console.log(',',curr,'cc',prev)
    }
    curr = curr.next;
  }
  console.log(prev,head)
  return head;
}

function Node(val) {
  this.value = val;
  this.next = null;
}
const l1 = new Node(4);
l1.next = new Node(5);
l1.next.next = new Node(4);

l1.next.next.next = new Node(5);
l1.next.next.next.next = new Node(5);
l1.next.next.next.next.next = new Node(3);


// console.log(JSON.stringify(l1))
console.log(JSON.stringify(deleteDups(l1)));
module.exports = deleteDups;
