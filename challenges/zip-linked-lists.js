/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let currentNodeL1 = l1;
  let currentNodeL2 = l2;
  let nextNodeL1 = l1.next;
  let nextNodeL2 = l2.next;

  while (l2.next !== null) {

    currentNodeL1.next = currentNodeL2;
    currentNodeL2.next = nextNodeL1;
    currentNodeL1.next = nextNodeL2;

    currentNodeL1 = nextNodeL1;
    currentNodeL2 = nextNodeL2;
    nextNodeL1 = currentNodeL1.next;
    nextNodeL2 = currentNodeL2.next;

  }

};

const node1 = new Node(1);
const node2 = new Node(3);
const node3 = new Node(5);

node1.next = node2;
node2.next = node3;
//------------------

const otherNode1 = new Node(2);
const otherNode2 = new Node(4);
const otherNode3 = new Node(6);

otherNode1.next = otherNode2;
otherNode2.next = otherNode3;

module.exports = {Node: Node, zip: zip};
