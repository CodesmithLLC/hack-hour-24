/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  //if k is less than zero return undefined
  if(k===0) {return undefined};
  let node = head;

  //find length of linked list
  let lengthOfLinkedList = 0
  while(node.next !== null) {
    lengthOfLinkedList++
    node = node.next;
  }
  
  //if k is greater than linked list length return undefined
  if(k > lengthOfLinkedList+1) {return undefined};
  node = head;

  //move down linked list to node number (length of list+1 - k)
  let nodeNumber = (lengthOfLinkedList+1)-k;
  while(nodeNumber > 0){
    node = node.next;
    nodeNumber--;
  }
  return node.value;
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, b));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
