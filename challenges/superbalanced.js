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
}

function height(tr) {
  if (!tr) return 0;
  return 1 + Math.max(height(tr.left), height(tr.right))
}

function superbalanced(tree) {
  if (tree === null) return true;
  if (!superbalanced(tree.left)) {
    return false;
  }
  if (!superbalanced(tree.right)) {
    return false;
  }
  if (Math.abs(height(tree.left) - height(tree.right)) > 1) {
    return false;
  }
  return true;
  // return Math.abs(height(tree.left) - height(tree.right)) < 2 && superbalanced(tree.left) && superbalanced(tree.right);
}

const trrr = new BinaryTree(3);
trrr.left = new BinaryTree(1);
// trrr.left.left = new BinaryTree(-1);

trrr.right = new BinaryTree(6);
// trrr.right.right = new BinaryTree(9);
// trrr.right.right.right = new BinaryTree(12);


console.log(superbalanced(trrr))
module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
