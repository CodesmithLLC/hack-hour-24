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
  if (this.head === null) {
    this.head = new Node(val);
    this.tail = this.head;
  } else {
    const newN = new Node(val);
    this.tail.next = newN;
    this.tail.next.prev = this.tail;
    this.tail = newN;
  }
};
// let newL = new LinkedList();
// newL.add(10)
// newL.add(1)
// newL.add(6)
// newL.add(3)

// console.log(newL);

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function remove(val) {
  if (!this.head) return null;
  if (this.tail.val === val) {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
  if (this.head.val === val ) {
    this.head = this.head.next;
    this.head.prev = null;
  } else {
    let pointer = this.head;
    
    while (pointer.next) {
      if (pointer.val === val) {
        pointer.prev.next = pointer.next;
        pointer.next.prev = pointer.prev;
        // console.log('kkkkkkevin')
        return;
      } 
      pointer = pointer.next;
    }
  }

};
// newL.remove(3);
// console.log(newL,'nnn')
module.exports = LinkedList;
