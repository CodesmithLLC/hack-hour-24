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
  const zipped = new Node();
  const nextArray = [];
  let toggle = true;
  const currNode = l1.valu;


  while (l1.next != null && l2.next !== null) {
    if (toggle) {
      zipped.value = currNode;
      zipped.next = l2CurrNode;
      toggle = false;
    }
  }
}

module.exports = { Node, zip };
