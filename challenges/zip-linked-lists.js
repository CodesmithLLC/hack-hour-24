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
  let head;

  if (l1 === null) {
    head = new Node(l2.value);
    head.next = l2.next;
    return head;
  } if (l2 === null) {
    head = new Node(l1.value);
    head.next = l1.next;
    return head;
  }

  head = new Node(l1.value);
  head.next = l1.next;

  const position = 1;
  let curNode = new Node(l2.value);
  curNode = l2.next;

  while (curNode !== null) {

  }
}

function insert(head, value, position) {
  let node = head;
  let shadow = null;
  let count = 0;
  const newNode = new Node(value);

  // if (position === 0) {
  //   this.addToHead(value);
  //   return;
  // }

  while (count < position) {
    shadow = node;
    node = node.next;
    count += 1;
  }

  newNode.next = shadow.next;
  shadow.next = newNode;
}

module.exports = { Node, zip };
