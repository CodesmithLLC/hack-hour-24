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

// function deleteDups(head) {
 
// }

// 3->5->9->5->4->5

function deleteDups(head) {
  // if empty or only 1 node
  if (!head || !head.next) return head;
  let curr = head;
  let prev = head;
  const testSet = new Set();
  while (curr) {
    if (testSet.has(curr.value)) {
      // prev.next = curr.next;
      prev.next = curr.next;
      // console.log('h',head,'p',prev)
    } else {
      testSet.add(curr.value);
      prev = curr;
      // console.log(',',head,'cc',prev)
    }
    curr = curr.next;
  }
  // console.log(prev,head)
  return head;
}

function Node(val) {
  this.value = val;
  this.next = null;
}
let l1 = new Node(4);
l1.next = new Node(5);
l1.next.next = new Node(4);

l1.next.next.next = new Node(5);
// l1.next.next.next.next = new Node(5);
// l1.next.next.next.next.next = new Node(5);


// console.log(JSON.stringify(l1))
console.log(JSON.stringify(deleteDups(l1)));
module.exports = deleteDups;
