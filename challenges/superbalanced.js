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
    console.log(subTree.left)
    if (subTree.left === null && subTree.right === null) return depth;
    if (subTree.left === null) return findDepth(subTree.right, depth + 1);
    if (subTree.right === null) return findDepth(subTree.left, depth + 1);
    return Math.max(findDepth(subTree.left, depth + 1), findDepth(subTree.right, depth + 1));
  };

  leftOfHeadTreeDepth = findDepth(leftOfHeadSubTree, 1);
  console.log(leftOfHeadTreeDepth);
  rightOfHeadTreeDepth = findDepth(rightofHeadSubTree, 1);
  console.log(rightOfHeadTreeDepth);
  return Math.abs(leftOfHeadTreeDepth - rightOfHeadTreeDepth) === 0 || Math.abs(leftOfHeadTreeDepth - rightOfHeadTreeDepth) === 1;

}

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };

const root = new BinaryTree(5);
const three = new BinaryTree(3);
const one = new BinaryTree(1);
root.left = three;
three.left = one;

const eight = new BinaryTree(8);
const fifteen = new BinaryTree(15);
const eleven = new BinaryTree(11);
const twelve = new BinaryTree(12);
root.right = eight;
eight.right = fifteen;
fifteen.left = eleven;
eleven.right = twelve;

console.log(root)



console.log(superbalanced(root));