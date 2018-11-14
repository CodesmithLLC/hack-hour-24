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
  let leftOfHeadSubTree = tree.left;
  let rightofHeadSubTree = tree.right;
  let leftOfHeadTreeDepth, rightOfHeadTreeDepth;

  const findDepth = (subTree, depth) => {
    if (subTree.left === null && subTree.right === null) return depth;
    if (subTree.left === null) return findDepth(subTree.right, depth + 1);
    if (subTree.right === null) return findDepth(subTree.left, depth + 1);
    return Math.max(findDepth(subTree.left, depth + 1), findDepth(subTree.right, depth + 1));
  };

  leftOfHeadTreeDepth = findDepth(leftOfHeadSubTree, 1);
  rightOfHeadTreeDepth = findDepth(rightofHeadSubTree, 1);
  return Math.abs(leftOfHeadTreeDepth - rightOfHeadTreeDepth) === 0 || Math.abs(leftOfHeadTreeDepth - rightOfHeadTreeDepth) === 1;
}

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };