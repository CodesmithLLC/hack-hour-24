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
