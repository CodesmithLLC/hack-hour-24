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
  if(!this.head){
    this.head = newNode;
    this.tail = newNode;
  } else{
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let headNode = this.head;
  while(headNode) {
    if(headNode.val === val && this.head === headNode) {
      this.head = headNode.next
      return;
    } else if (headNode.val === val && this.tail === headNode) {
      this.tail = headNode.prev;
      return;
    } else if(headNode.val === val) {
      headNode.prev.next = headNode.next;
      headNode.next.prev = headNode.prev;
      return;
    } else{
      headNode = headNode.next;
    }
  }
  console.log('Value not found');
};

let test = new LinkedList();
test.add(1);
test.add(2);
test.add(5);
console.log(test);
test.remove(2);
console.log(test);
module.exports = LinkedList;
