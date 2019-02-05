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
  // edge cases: nonpositive k and null head
  if (k <= 0 || !head) return;
  
  // define lead and follow
  let lead = head, follow = head;
  // move lead forward k - 1 times, or until lead reaches last node
  // let i be the number of times we still need to move the lead
  let i = k - 1;
  while (i > 0 && lead.next) {
    lead = lead.next;
    i--;
  }
  // if last node was reached before lead could move k - 1 times, return
  if (i > 0) return;
  // shuttle lead and follow until lead reaches last node
  while (lead.next) {
    lead = lead.next;
    follow = follow.next;
  }
  // return the follow's value
  return follow.value;
}


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


module.exports = { Node, kthToLastNode };
