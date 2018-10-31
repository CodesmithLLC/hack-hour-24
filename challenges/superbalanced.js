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
  // Declare array to store terminal heights
  const terminalHeightArray = [];

  // Helper function for recursive calls - keep track of heights, returns heights of empty trees
  const heightQuery = (BST, height = 0) => {
    // If empty, push height into terminalHeightArray
    if (!BST.left && !BST.right) {
      return terminalHeightArray.push(height);
    }
    // If not empty, recurisvely call heightQuery on available branches
    if (BST.left) heightQuery(BST.left, height + 1);
    if (BST.right) heightQuery(BST.right, height + 1);
    return true;
  };

  // Call heightQuery on tree
  heightQuery(tree);

  // Sort terminalHeightArray from smallest to largest
  terminalHeightArray.sort((a, b) => a - b);
  const deepestPoint = terminalHeightArray[terminalHeightArray.length - 1];
  const shallowestPoint = terminalHeightArray[0]

  // Return true if difference between largest and smallest is 0 or 1
  return (deepestPoint - shallowestPoint) <= 1;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
