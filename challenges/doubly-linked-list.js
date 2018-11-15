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
  // Take care of edge case where there is no head.
  if (this.head === null) {
    this.head = new Node(val);
    this.tail = this.head;
    return;
  }

  const newNode = new Node(val);
  newNode.prev = this.tail;
  this.tail.next = newNode;
  this.tail = newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function remove(val) {
  let curNode = this.head;

  // Take care of edge case where head or tail has the inputted value.
  if (this.head.val === val) {
    this.head = this.head.next;
    this.head.prev = null;
    return;
  }

  if (this.tail.val === val) {
    this.tail = this.tail.prev;
    this.tail.next = null;
    return;
  }

  curNode = curNode.next;

  while (curNode !== null) {
    if (curNode.val === val) {
      curNode.prev.next = curNode.next;
      curNode.next.prev = curNode.prev;
    }

    curNode = curNode.next;
  }
};

const dll = new LinkedList();

// dll.add(8);
// console.log(JSON.stringify(dll));
// dll.add(9);
// console.log(dll);
// dll.add(10);
// console.log(dll);
// dll.remove(10);
// console.log(dll);
// dll.remove(8);
// console.log(dll);

// let curNode = dll.head;

// while (curNode !== null) {
//   console.log('curNode', curNode);
//   console.log('prev', curNode.prev);
//   console.log('next', curNode.next);
//   curNode = curNode.next;
// }

module.exports = LinkedList;
