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
  let l1current = l1;
  let l2current = l2;
  let output = l1;
  let head = l1;
  let carryOver = 0;
  let l1length = 0;
  let l2length = 0;
  while (l1current.next){
    l1length += 1;
    l1current = l1current.next;

  }
  while (l2current.next) {
    l2length += 1;
    l2current = l2current.next;
  }
  l1current = l1;
  l2current = l2;
  if(l1length >= l2length){
    while(l1current) {
      if(l2current !== null && l1current.value + l2current.value >= 10) {
        carryOver = 1;
        l1.value = l1current.value + l2current.value - 10;
      } else if(l2current !== null){
        l1.value = l1current.value + l2current.value + carryOver;
        carryOver = 0;
      } else{
        l1.value = l1current.value;
      }
      if(l2current !== null){
        l1 = l1.next;
        l1current = l1current.next;
        l2current = l2current.next;
      } else{
        l1 = l1.next;
        l1current = l1current.next;
      }
      
    }
  } else{
    while(l2current) {
      if(l1current !== null && l1current.value + l2current.value >= 10) {
        carryOver = 1;
        l1.value = l1current.value + l2current.value - 10;
      } else if(l1current !== null){
        l1.value = l1current.value + l2current.value + carryOver;
        carryOver = 0;
      } else{
        l1.value = l1current.value;
      }
      if(l1current !== null){
        l1 = l1.next;
        l1current = l1current.next;
        l2current = l2current.next;
      } else{
        l1 = l1.next;
        l2current = l2current.next;
      }
  }
  }
  return head;
}

let test1 = new Node(2);
let test2 = new Node(1);
let test3 = new Node(5);
let test8 = new Node(9);

test1.next = test2;
test2.next = test3;
test3.next = test8;

let test4 = new Node(5);
let test5 = new Node(9);
let test6 = new Node(2);

test4.next = test5;
test5.next = test6;

console.log(addLinkedList(test1, test4));

module.exports = {Node: Node, addLinkedList: addLinkedList};
