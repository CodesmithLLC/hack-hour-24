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
//     this.value = value;
//     this.next = null;
// }

// // 

// function reverseLinkedList(head) {
//   let arr = [3,2,1];
//   let test2 = new Node(arr[0]);
//   let pointer = test2;
//   while(arr[0]){
//     pointer = new Node(arr[0])
//     console.log(arr, pointer)
//     arr = arr.slice(1);
//     pointer = pointer.next;
//   }
//   console.log(test2)
//   return test2;  
// }

  
// const l1 = new Node(1);
// l1.next = new Node(2);
// l1.next.next = new Node(3);
// console.log(reverseLinkedList(l1))

// // console.log(reverseLinkedList2(l1))

// module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
