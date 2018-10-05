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
  let cur1 = l1;
  let cur2 = l2;
  while(cur1 != null && cur2 != null) {
    let x = cur1;
    cur1 = cur1.next;  
    let y = cur2;
    cur2 = cur2.next;
    y.next = x.next;
    x.next = y;  
  }
  return l1;
};

let arr1 = ['c', 'd', 's', 'i', 'h'];
let arr2 = ['o', 'e', 'm', 't'];

function makeLlist(arr) {
  let llist = null;
  var cur; 
  for (let i = 0; i < arr.length; i++) {
    let newNode = new Node(arr[i]);
    if (llist == null) {
      cur = llist = newNode;
    } else {
      cur.next = newNode;
      cur = newNode;
    }
  }
  return llist;
}

let l1 = makeLlist(arr1);
let l2 = makeLlist(arr2);
let l1l2 = zip(l1, l2);



module.exports = {Node: Node, zip: zip};
