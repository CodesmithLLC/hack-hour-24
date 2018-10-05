/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 * */
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');


a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

/*
 *kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */
function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {


  let counter = 0;
  let currNode = head;
  let array = [];

  /*create a count for all the nodes [a: 1, b: 2, c: d ...]
   *check if the head equals the value
   */
  array.push(currNode.value);

  while (currNode) {

    counter += 1;
    currNode = currNode.next;

    if (currNode !== null) {
      array.push(currNode.value);
    }
  }

  let NodePosition = counter - k;

  return array[NodePosition];


}

kthToLastNode(2, a);
module.exports = {
  Node: Node,
  kthToLastNode: kthToLastNode;
};