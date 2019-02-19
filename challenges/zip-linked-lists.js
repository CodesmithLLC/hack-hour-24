/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */


function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let head = l1;
  let curr1 = l1;
  let curr2 = l2;
  while (curr1 !== null && curr2 !== null) {
    let l1Next = curr1.next;
    let l2Next = curr2.next;
    curr1.next = curr2;
    curr2.next = l1Next;
    curr1 = l1Next;
    curr2 = l2Next;
  }
  return head;
}

module.exports = {Node: Node, zip: zip};


