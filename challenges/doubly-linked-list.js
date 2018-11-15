/* Create a doubly linked list with an add and remove method */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add a node to the end of the List
  add(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return newNode;
  }

  // Remove the first node with the inputted value
  remove(val) {
    // Edge Case: Empty List
    if (!this.head) return null;
    // If list has value, assign currNode tracker to the head and iterate through the list
    let currNode = this.head;
    while (currNode) {
      if (currNode.val === val) {
        // If the value is found
        if (currNode.prev) {
          // Unless currNode is head, adjust prevNode to skip over currNode
          currNode.prev.next = currNode.next;
        } else {
          // If currNode is head, reassign head
          this.head = currNode.next;
        }
        if (currNode.next) {
          // Unless currNode is tail, adjust nextNode to skip over currNode
          currNode.next.prev = currNode.prev;
        } else {
          // If currNode is tail, reassign tail
          this.tail = currNode.prev;
        }
        // Clear references from currNode and return it
        currNode.prev = null;
        currNode.next = null;
        return currNode;
      }
      // If value is not found, proceed to next node
      currNode = currNode.next;
    }
    return null;
  }
}

module.exports = LinkedList;

// console.log('---TESTING doubly-linked-list ---');
// const newList = new LinkedList();
// newList.add(1);
// console.log(newList);
// newList.add(2);
// console.log(newList);
// newList.add(3);
// newList.add(4);
// newList.add(5);
// console.log(newList);
// newList.remove(1);
// console.log(newList);
// newList.remove(5);
// console.log(newList);
// newList.remove(3);
// console.log(newList);
