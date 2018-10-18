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
  // Declare values to represent left and right validity
  let leftValidBST;
  let rightValidBST;
  // Assess left value
  if (!this.left) leftValidBST = true;
  else leftValidBST = (this.left.value >= this.value) ? false : validBST(this.left);
  // Assess right value - make recursive call if right is a tree
  if (!this.right) rightValidBST = true;
  else rightValidBST = (this.right.value <= this.value) ? false : validBST(this.right);
  return leftValidBST && rightValidBST;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
