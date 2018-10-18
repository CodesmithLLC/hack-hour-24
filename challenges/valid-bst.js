/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
  if(!tree.left && !tree.right) return true
  if(tree.value < tree.left.value || tree.value > tree.right.value) return false
  return (validBST(tree.left) && validBST(tree.right))
}
let test = new BinaryTree(50);
let leftTest = new BinaryTree(25);
let rightTest = new BinaryTree(75);

let subLeftTree = new BinaryTree(10);
let subRightTree = new BinaryTree(35);

let subRightRightTree = new BinaryTree(70);
let subRightLeftTree = new BinaryTree(60);

test.left = leftTest;
test.right = rightTest;
leftTest.left = subLeftTree;
leftTest.right = subRightTree;
rightTest.right = subRightRightTree;
rightTest.left = subRightLeftTree;

validBST(test);


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
