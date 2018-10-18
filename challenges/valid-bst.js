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

function validBST(tree, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY) {
  // Declare values to represent left and right validity
  let leftValidBST;
  let rightValidBST;
  // Assess left value - it must be either null or between the min and this.value
  if (!this.left) leftValidBST = true;
  // If it's not null, issue a recursive call on the left BST setting a new max of the parent tree's value
  else leftValidBST = (this.left.value >= this.value || this.left.value <= this.min) ? false : validBST(this.left, min, this.value);
  // Assess right value - it must be either null or between the max and this.value
  if (!this.right) rightValidBST = true;
  // If it's not null, issue a recursive call on the right BST setting a new min of the parent tree's value
  else rightValidBST = (this.right.value <= this.value || this.right.value >= this.max) ? false : validBST(this.right, this.value, max);
  // Return true only if both left and right are true
  return leftValidBST && rightValidBST;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
