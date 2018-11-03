/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if the linked list has a cyclical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

const Node = function Node(value) {
  this.value = value;
  this.next = null;
};

const hasCycle = function hasCycle(head) {
  // Assign a pointer to starting node
  let currNode = head;

  // Create a new set to hold addresses
  const nodeSet = new Set();

  // Loop through nodes looking for a cycle
  while (currNode) {
    // If current node is in set, return true, otherwise loop
    if (nodeSet.has(currNode)) return true;
    nodeSet.add(currNode);
    currNode = currNode.next;
  }

  // If list ends, no cycle
  return false;
};

module.exports = {Node: Node, hasCycle: hasCycle}

// console.log('---TESTING mergeRanges---');

// const cycleList = new Node(1);
// cycleList.next = new Node(2);
// cycleList.next.next = new Node(3);
// cycleList.next.next.next = cycleList;
// console.log(`hasCycle(cycleList): expect -> true: actual -> [${hasCycle(cycleList)}]`);

// const noCycleList = new Node(1);
// cycleList.next = new Node(2);
// cycleList.next.next = new Node(3);
// console.log(`hasCycle(noCycleList): expect -> false: actual -> [${hasCycle(noCycleList)}]`);
