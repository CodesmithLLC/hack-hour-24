/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

// refactored solution after seeing Sam's solution (does not include consideration of edge cases):
function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let lead = head;
  let current = head;

  for (let i = 0; i < k - 1; i++) {
    lead = lead.next
  }

  while (lead.next) {
    lead = lead.next;
    current = current.next;
  }

  return current.value;



// // my original solution:
//  function Node(val) {
//   this.value = val;
//   this.next = null;
// }

// function kthToLastNode(k, head) {
//   let currentVal = head;
//   let nodeCount = 1;

//   // find out how many items are in linked list:
//   while (currentVal.next) {
//     nodeCount += 1;
//     currentVal = currentVal.next;
//   }

//   // find item. go down list nodeCount - k times.
//   currentVal = head;
//   for (let i = 0; i < nodeCount - k; i += 1) {
//     currentVal = currentVal.next;
//   }

//   return currentVal.value;
// }




module.exports = {Node: Node, kthToLastNode: kthToLastNode};
