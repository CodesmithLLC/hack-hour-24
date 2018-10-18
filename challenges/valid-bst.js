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
  // console.log('current tree val: ', tree.value);
  if (tree.left === null && tree.right === null) return true;

  // console.log('gpt: ', gpt.value);

  // check left and right against currentNode
  // if either is false, return false

  if ((tree.left && tree.left.value >= tree.value) || (tree.right && tree.value >= tree.right.value)) return false;

  if (tree.value < gpt.value) {
    if ((tree.left && tree.left.value >= gpt.value) || (tree.right && gpt.value <= tree.right.value)) return false;
  } else if (tree.value > gpt.value) {
    if ((tree.left && tree.left.value <= gpt.value) || (tree.right && gpt.value >= tree.right.value)) return false;
  }
  // if (
  //   (
  //     // if left node exists and is greater than value or right node exists and is less than value
  //     (tree.left && tree.left.value >= tree.value) || (tree.right && tree.value >= tree.right.value)
  //   )
  //   || (
  //     (tree.left && tree.left.value >= gpt.value) || (tree.right && gpt.value >= tree.right.value)
  //   )
  // ) {
  //   console.log('gptree: ', gpt.value);
  //   console.log('out of order for this tree: ', tree.right.value);
  //   return false;
  // }
  // call validBST for left && right
  // if (tree === gpt || (tree.value === gpt.left.value || tree.value === gpt.right.value)) {
  //   if (!tree.left) return validBST(tree.right, gpt);
  //   if (!tree.right) return validBST(tree.left, gpt);
  //   return validBST(tree.left, tree) && validBST(tree.right, gpt);
  // }
  if (!tree.left) return validBST(tree.right, tree);
  if (!tree.right) return validBST(tree.left, tree);
  return validBST(tree.left, tree) && validBST(tree.right, tree);

}

module.exports = { BinaryTree: BinaryTree, validBST: validBST };

const root = new BinaryTree(5);
const one = new BinaryTree(1);
const three = new BinaryTree(3);
const four = new BinaryTree(4);
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
