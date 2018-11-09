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
  var curr = head,
    obj = {},
    prev;
    // next;
  // till the end item is not null
  while (curr.next != null) {

    if (!obj[curr.value]) {
      obj[curr.value] = 1;
    } else {
      if (prev) {
        // console.log('kevin')
        prev.next = curr.next;
      }
    }
    prev = curr;
    curr = curr.next;
  }
  if (curr.next == null) {
    if (obj[curr.value]) {
      // console.log(curr.value,'why')
      curr = null;
      prev.next = null;
      let pointer = head;
      while(pointer.next.next){
        // console.log('k');
        pointer = pointer.next
      }
      pointer.next = null;
      // console.log(pointer)
    }
  }
  // console.log(JSON.stringify(head));
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
