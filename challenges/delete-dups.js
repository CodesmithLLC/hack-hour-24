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

function deleteDups(head) {
  let currNode = head;
  const store = {};
  store[currNode.value] = true;
  while (currNode.next) {
    while (store[currNode.next.value]) {
      currNode.next = currNode.next.next;
    }
    store[currNode.next.value] = true;
    currNode = currNode.next;
  }
  return head;
}


// function deleteDups(head) {
//   const storeSet = new Set();
//   if (head.next) {
//     if (!storeSet.has(head.next.value)) {
//       storeSet.add(head.next.value);
//       deleteDups(head.next);
//     } else if (head.next.next) {
//       head.next = head.next.next;
//       deleteDups(head.next.next);
//     } else {
//       head.next = null;
//     }
//   }
// }

// class LinkedList {
//   constructor(value) {
//     this.head = null;
//     this.addToHead(value);
//   }

//   addToHead(value) {
//     const newNode = { value };
//     newNode.next = this.head;
//     this.head = newNode;
//     return this;
//   }
// }

// const list = new LinkedList("A")
//   .addToHead("B")
//   .addToHead("C")
//   .addToHead("C")
//   .addToHead("D");

// deleteDups(list.head);

// console.log(list.head.value);
// console.log(list.head.next.value);
// console.log(list.head.next.next.value);
// console.log(list.head.next.next.next.value);
// console.log(list.head.next.next.next.next.value);


module.exports = deleteDups;
