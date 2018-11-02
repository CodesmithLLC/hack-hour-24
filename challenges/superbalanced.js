/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.height;
}

function superbalanced(tree) {
  if (tree.left === null && tree.right === null)
    tree.height = 0;
  else if (tree.left === null) {
    if (!superbalanced(tree.right) || (tree.right.height > 1))
      return false;
    tree.height = tree.right.height + 1;
  }
  else if (tree.right === null) {
    if (!superbalanced(tree.left) || (tree.left.height > 1))
      return false;
    tree.height = tree.left.height + 1;
  }
  else {
    if (!superbalanced(tree.left) || !superbalanced(tree.right) || (Math.abs(tree.left.height - tree.right.height) > 1))
      return false;
    tree.height = Math.max(tree.left.height, tree.right.height) + 1;
  }
  return true;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
