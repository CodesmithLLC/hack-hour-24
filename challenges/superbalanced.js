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
  if (tree.left === null && tree.right === null) {
    return true;
  }
  if (tree.left !== null && tree.right !== null) {
    return findHeight(tree.left) - findHeight(tree.right) <= 1 && superbalanced(tree.left) && superbalanced(tree.right);
  }
  if (tree.left !== null) {
    return findHeight(tree.left) - 1 <= 0 && superbalanced(tree.left);
  }
  if (tree.right !== null) {
    return findHeight(tree.right) - 1 <= 0 && superbalanced(tree.right);
  }
}

function findHeight(tree) {
  if (tree === null) {
    return 0;
  }
  if (tree.left !== null && tree.right !== null) {
    return Math.max(1 + findHeight(tree.left), 1 + findHeight(tree.right));
  }
  if (tree.left !== null) {
    return 1 + findHeight(tree.left);
  }
  if (tree.right !== null) {
    return 1 + findHeight(tree.right);
  }

  return 1;
}

const tree1 = new BinaryTree(1);
const tree2 = new BinaryTree(2);
const tree3 = new BinaryTree(3);
const tree4 = new BinaryTree(4);
const tree5 = new BinaryTree(5);
const tree6 = new BinaryTree(6);
const tree7 = new BinaryTree(7);
const tree8 = new BinaryTree(8);
const tree9 = new BinaryTree(9);
const tree10 = new BinaryTree(10);
const tree11 = new BinaryTree(11);
const tree12 = new BinaryTree(12);
const tree13 = new BinaryTree(13);

// tree1.left = tree2;
// tree1.right = tree3;
// tree2.left = tree4;
// tree2.right = tree5;
// tree3.right = tree6;
// tree5.left = tree7;
// tree7.left = tree8;

tree1.left = tree2;
tree1.right = tree3;
tree2.left = tree4;
tree2.right = tree5;
tree3.left = tree6;
tree3.right = tree7;
tree4.left = tree8;
tree4.right = tree9;
tree5.left = tree10;
tree9.left = tree11;
tree10.left = tree12;
tree7.left = tree13;

console.log(superbalanced(tree1));

module.exports = { BinaryTree, superbalanced };
