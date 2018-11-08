/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function Node(val) {
  this.value = val;
  this.next = null;
}


function deleteDups(head) {
  const dict = {};
  const newHead = head;

  if (head === null) {
    return head;
  }

  let curNode = head;
  dict[curNode.value] = true;
  let leadNode = head.next;

  while (leadNode !== null) {
    // console.log(1, leadNode);
    if (dict[leadNode.value] === undefined) {
      // console.log(2, leadNode.value);
      dict[leadNode.value] = true;
      curNode.next = leadNode;
      curNode = curNode.next;
    }
    leadNode = leadNode.next;
  }

  curNode.next = null;

  return newHead;
}

// const node1 = new Node(1);
// const node2 = new Node(1);
// const node3 = new Node(1);
// const node4 = new Node(1);
// node1.next = node2;
// node2.next = node3;
// node3.next = node4;

// console.log(JSON.stringify(node1));
// console.log(JSON.stringify(deleteDups(node1)));
// deleteDups(node1);

module.exports = deleteDups;
