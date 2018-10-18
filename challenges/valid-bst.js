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
  // Has no children.
  if ((tree.left === null && tree.right === null) || tree === null) {
    return true;
  }

  // Check left child.
  if (tree.left !== null) {
    if (tree.value < tree.left.value) {
      return false;
    }
  }

  // Check right child.
  if (tree.right !== null) {
    if (tree.value > tree.right.value) {
      return false;
    }
  }

  // Is valid BST, so check children;
  if (tree.left !== null && tree.right !== null) {
    return validBST(tree.left) && validBST(tree.right);
  } if (tree.left !== null) {
    return validBST(tree.left);
  }
  return validBST(tree.right);
}

// const btree = new BinaryTree(9);
// btree.left = new BinaryTree(8);
// btree.left.left = new BinaryTree(9);
// btree.right = new BinaryTree(10);

// console.log(validBST(btree));

module.exports = { BinaryTree, validBST };
