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


//  my notes
  // with using a temporary buffer
    // you would create an object that has values and if the number already exists you would remove that node
  // without using a temporary buffer
    // maybe you would sort the linked list
    // and then remove duplicates while traversing through the sort

// good example 1->2->2->1->5
function deleteDups(head) {
  // create Set of unique values
  const set = new Set();
  // define current node that will go through list
  let curr = head;
  // define last safe node: refers to most unique value
  let safe = head;
  // loop through list with curr
  while (curr) {
    // if curr.value is in set, remove curr from list
    // if curr.value is not in set, add it to set, and redfine safe node
    if (set.has(curr.value)) {
      safe.next = curr.next
    } else {
      safe = curr;
      
    }
    // always advance current node
  }
}

module.exports = deleteDups;
