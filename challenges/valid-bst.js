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
  // Assess left value - if it's null, the left branch is valid
  if (tree.left === null) {
    leftValidBST = true;
    // If left value is greater than tree.value or less than the min, the left branch is invalid
  } else if (tree.left.value >= tree.value || tree.left.value <= min) {
    leftValidBST = false;
    // Otherwise, recursive call on the left branch with a new max equal to the parent's value
  } else {
    leftValidBST = validBST(tree.left, min, tree.value);
  }
  // Assess right value - if it's null, the right branch is valid
  if (tree.right === null) {
    rightValidBST = true;
    // If right value is less than tree.value or greater than the max, the right branch is invalid
  } else if (tree.right.value <= tree.value || tree.right.value >= max) {
    rightValidBST = false;
    // Otherwise, recursive call on the right branch with a new min equal to the parent's value
  } else {
    rightValidBST = validBST(tree.right, tree.value, max);
  }
  // Return true only if both left and right are true
  return leftValidBST && rightValidBST;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};

// const myBinaryTree = new BinaryTree(10);
// myBinaryTree.left = new BinaryTree(2);
// myBinaryTree.left.left = new BinaryTree(1);
// myBinaryTree.left.right = new BinaryTree(16);
// myBinaryTree.right = new BinaryTree(20);
// myBinaryTree.right.left = new BinaryTree(6);
// myBinaryTree.right.right = new BinaryTree(25);
// console.log(myBinaryTree);
// console.log(validBST(myBinaryTree));
