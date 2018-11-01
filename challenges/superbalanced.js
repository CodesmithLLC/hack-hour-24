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

function superbalanced(tree) {
  let count = {
    left: 0,
    right: 0,
  }
  let balanced;
  let currLeftNode = tree;
  while (currLeftNode.left !== null) {
    if (currLeftNode.left.value > currLeftNode.value) {
      balanced = false;
    }
    else {
      currLeftNode = currLeftNode.left;
      count.left = count.left + 1;
    }
  }
  let currRightNode = tree;
  while(currRightNode.right !== null) {
    if (currRightNode.right.value < currRightNode.value) {
      balanced = false;
    }
    else {

      currRightNode = currRightNode.right;
      count.right = count.right + 1;
    }
  }
  console.log(count);
  if (count.right - count.left > 1 || count.left - count.right > 1) {
    balanced = false;
  }
  return balanced;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
