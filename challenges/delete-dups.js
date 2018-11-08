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

var Node = function(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
  let cache = {};
  if(!head) return;
  if(!head.next) return head;

  let currNode = head;
  let dupNode;
  cache[currNode.value] = 1;
  while(currNode) {
    console.log(cache);
    console.log('currentNode beforeif check', currNode);
    if(currNode.next && cache[currNode.next.value]) {
      dupNode = currNode;
      console.log('DUPNODE START', dupNode);
      while(cache[dupNode.value]) {
        dupNode = dupNode.next;
      }
      console.log('AFTER SKIPPING DUPNODES', dupNode);
      //dupNode = dupNode.next;
      console.log('CURR NODE', currNode);
      currNode.next = dupNode;
    } else if(currNode.next){
      cache[currNode.next.value] = 1;
    }
    currNode = currNode.next;
  }
  return head;
}

let test = new Node(1);
let test2 = new Node(2);
let test3 = new Node(2);
let test4 = new Node(4);
let test5 = new Node(3);
let test6 = new Node(2);
let test7 = new Node(0);


test.next = test2;
test2.next = test3;
test3.next = test4;
test4.next = test5;
test5.next = test6;
test6.next = test7;

console.log(JSON.stringify(deleteDups(test)));


module.exports = deleteDups;
