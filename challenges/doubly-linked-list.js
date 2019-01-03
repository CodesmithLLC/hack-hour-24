/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function add(val) {
  const newNode = new Node(val);
  if (this.tail === null) {
    this.tail = newNode;
    this.head = newNode;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  // if value is the head make next the head, make its previous null
  if (this.head.val === val) {
    this.head.
  }
  // if value is the tail make the tail the previous, make its next null
  // if in the middle make currentNode's previous's next value the current node's next value, make currentNode's next value's previous value the currentNode's previous value
  let currentNode = this.head;
  while (currentNode.val !== val) {
    currentNode = currentNode.next;
  }
};

module.exports = LinkedList;
