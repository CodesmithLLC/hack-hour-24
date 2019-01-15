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


function superbalanced(t) {
  let heights = [];

  function checkHeight(tree, h = 0) {
    let height = h;
    if (tree.left === null && tree.right === null) {
      heights.push(height);
    } else if (tree.left) {
      checkHeight(tree.left, height += 1);
    } else if (tree.right) {
      checkHeight(tree.right, height += 1);
    }
  }

  checkHeight(t);
  heights = heights.sort((a, b) => a - b);
  const smallest = heights[0];
  const largest = heights[heights.length - 1];
  return (largest - smallest === 0 || largest - smallest === 1);


  // return (balanced(tree)) !== -2;
  
  // function balanced(tree) {
  //   if (!tree.left && !tree.right) {
  //     return -1;
  //   }
  //   if (tree.left) {}

    
  // }

  
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
