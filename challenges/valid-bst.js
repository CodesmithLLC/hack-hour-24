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

function validBST(tree, gpt = tree) {
  // if left and right of tree is null, return true
  if (tree.left === null && tree.right === null) return true;

  // check left and right against currentNode
  // if either is false, return false

  // check if left and right leaf value of parent isn't valid
  if (tree.left && tree.left.value >= tree.value) return false;
  if (tree.right && tree.right.value <= tree.value) return false;

  if (tree.value < gpt.value) {
    if ((tree.left && tree.left.value >= gpt.value) || (tree.right && tree.right.value >= gpt.value)) {
      return false;
    }
  }

  if (tree.value > gpt.value) {
    if ((tree.left && tree.left.value <= gpt.value) || (tree.right && tree.right.value <= gpt.value)) {
      return false;
    }
  }
  if (!tree.left) return validBST(tree.right, tree);
  if (!tree.right) return validBST(tree.left, tree);
  return validBST(tree.left, tree) && validBST(tree.right, tree);
}

module.exports = { BinaryTree: BinaryTree, validBST: validBST };

const root = new BinaryTree(5);
const one = new BinaryTree(1);
const three = new BinaryTree(3);
const four = new BinaryTree(3);
const six = new BinaryTree(6);
const seven = new BinaryTree(7);
const eight = new BinaryTree(8);

root.left = three;
root.right = seven;
three.left = one;
three.right = four;
seven.left = six;
seven.right = eight;

console.log(validBST(root));
