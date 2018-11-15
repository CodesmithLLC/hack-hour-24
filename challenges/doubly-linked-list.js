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
LinkedList.prototype.add = function (val) {
  const node = new Node(val);

  if (!this.head) {
    this.head = this.tail = node;
  } else {
    // tail node next points to new node
    this.tail.next = node;

    // assign prev of new node to tail node
    node.prev = this.tail;

    // reassign tail to new node
    this.tail = node;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  let ptr = this.head;

  while (ptr.val !== val || ptr === null) {
    ptr = ptr.next;
  }

  if (ptr === null) return false;

  // if first node
  if (ptr === this.head) {
    // reassign this.head to this.head.next
    this.head = this.head.next;
    // set new this.head.prev to null
    this.head.prev = null;
  }
  // if last node
  else if (ptr.next === null) {
    // reassign this.tail to this.tail.prev
    this.tail = this.tail.prev;
    // set new this.tail.next to null
    this.tail.next = null;
  }
  // else all other nodes
  else {
    // reassign found node next link onto prev node next link
    ptr.prev.next = ptr.next;
    // reassign found node next node prev to found node prev
    ptr.next.prev = ptr.prev;
  }
};

module.exports = LinkedList;

const DLL = new LinkedList();

DLL.add(1);
DLL.add(2);
DLL.add(3)
DLL.remove(3);
console.log(DLL)
