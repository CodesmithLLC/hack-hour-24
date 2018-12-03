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
LinkedList.prototype.add = function(val) {
  let newNode = new Node(val);
  if (this.head === null) {
    this.head = this.tail = newNode;
    return;
  }
  newNode.prev = this.tail;
  this.tail.next = newNode;
  this.tail = newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let cur = this.head;
  while (cur != null) {
    if (cur.val === val) {
      if (cur != this.head && cur !== this.tail) {
        cur.prev.next = cur.next;
        cur.next.prev = cur.prev;
      }
      else if (cur !== this.head) {   // cur === tail
        cur.prev.next = null;
        this.tail = cur.prev
      }
      else if (cur !== this.tail) {    // cur === head
        cur.next.prev = null;
        this.head = cur.next;
      }
      else {
        this.head = null;
        this.tail = null;
      }
    }
    cur = cur.next;
  }
};

LinkedList.prototype.print = function() {
  let cur = this.head;
  while(cur != null) {
    console.log(cur.val, '->');
    cur = cur.next;
  }
}
LinkedList.prototype.reversePrint = function() {
  let cur = this.tail;
  while(cur != null) {
    console.log(cur.val, '->');
    cur = cur.prev;
  }
}
let llist = new LinkedList();
llist.add(1);
llist.add(2);
llist.add(3);
llist.print();
llist.reversePrint();
console.log('take out the head node 1...');
llist.remove(1);
llist.print();
llist.reversePrint();
console.log('add new node 4...');
llist.add(4);
llist.print();
llist.reversePrint();
console.log('take out the middle node 3');
llist.remove(3);
llist.print();
llist.reversePrint();
console.log('take out the last node 4');
llist.remove(4);
llist.print();
llist.reversePrint();
console.log('take out the remaining node 2...')
llist.remove(2);
llist.print();
llist.reversePrint();
module.exports = LinkedList;
