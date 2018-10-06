/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */
console.log('hi')
function Node(val) {
  this.value = val;
  this.next = null;
}

// function zip(l1, l2) {
//   // let n1 = l1.next;
//   // let n2 = l2.next;
//   // let curr = l1;
//   while (l1 !== null && l2 !== null) {
//     // let n1 = l1.next;
//     // let n2 = l2.next;
//     // l2.next = n1;
//     // l1.next = l2;
//     l1 = l1.next;
//     l2 = l2.next;
//   }
// console.log(l1,l2)
//   return l1;
// }
function zip(l1, l2) {
  let curr1 = l1;
  let curr2 = l2;

  while(curr1 != null && curr2 != null) {
    let l1 = curr1;
    let l2 = curr2;
    curr1 = curr1.next;  
    curr2 = curr2.next;
    l2.next = l1.next;
    l1.next = l2;  
  }
  return l1;
};

const test1 = new Node(1);
test1.next = new Node(3);
test1.next.next = new Node(5);
const test2 = new Node(2);
test2.next = new Node(4);
test2.next.next = new Node(6);
console.log(zip(test1, test2));
module.exports = {Node: Node, zip: zip};
