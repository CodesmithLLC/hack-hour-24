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

const deleteDups = (head) => {
  let currNode = head;
  while (currNode) {
    let trackerNode = currNode;
    while (trackerNode.next) {
      if (currNode.value === trackerNode.next.value) {
        trackerNode.next = trackerNode.next.next;
      } else {
        trackerNode = trackerNode.next;
      }
    }
    currNode = currNode.next;
  }
  return head;
};

module.exports = deleteDups;
