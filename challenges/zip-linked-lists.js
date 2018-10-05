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

const zip = function zip(l1, l2) {
  // Declare mutable pointers to l1 and l2
  let currNode1 = l1;
  let currNode2 = l2;

  while (l1.next || l2.next) {
    // Declare block-scoped pointers to l1.next and l2.next
    const zipNode1 = currNode1.next;
    const zipNode2 = currNode2.next;
    // Point currNode1 to l2 (without losing l1.next)
    currNode1.next = l2;
    // If zipNode1 isn't null, point currNode2 at zipNode1 and move currNode1 to zipNode1
    if (zipNode1) {
      currNode2.next = zipNode1;
      currNode1 = zipNode1;
    }
    // If zipNode2 exists, migrate currNode2 to zipNode2
    if (zipNode2) {
      currNode2 = zipNode2;
    }
  }
};

module.exports = {Node: Node, zip: zip};
