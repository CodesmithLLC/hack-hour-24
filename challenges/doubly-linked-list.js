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
  if (this.head === null) {
    this.head = new Node(val);
    this.tail = this.head;
  }
  else {
    currNode = new Node(val);
    this.tail.next = currNode;
    currNode.prev = this.tail;
    this.tail = currNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (!this.head) return undefined; 
  else {
    currNode = this.head;
    while (currNode !== null) {
      //remove
      if (currNode.val === val) {
        // if we are removing the head
        if (this.head === currNode) {
          currNode.next.prev = null;
          this.head = currNode.next;
          return val;
        }
        // if we are removing the tail
        else if (this.tail === currNode) {
          currNode.prev.next = null;
          this.tail = currNode.prev;
          return val;
        }
        else {
          currNode.next.prev = currNode.prev;
          currNode.prev.next = currNode.next;
          return val;
        }
      } 
      else {
        currNode = currNode.next;
      }
    }
    return undefined; 
  }
};

module.exports = LinkedList;
