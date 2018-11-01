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
  
  let leftHeight = 1;
  let rightHeight = 1;

  function leftCheck(tree) {
    if (tree.left) {
      leftHeight += 1;
      leftCheck(tree.left);
    } 
    if (tree.right) {
      leftHeight += 1;
      leftCheck(tree.right);
    }
  }

  function rightCheck(tree) {
    if (tree.left) {
      rightHeight += 1;
      rightCheck(tree.left);
    } 
    if (tree.right) {
      rightHeight += 1;
      rightCheck(tree.right);
    }
  }

  leftCheck(tree.left);
  rightCheck(tree.right);

  console.log(leftHeight);
  console.log(rightHeight);

}

let bt = new BinaryTree(1);
bt.left = new BinaryTree(2);
bt.left.left = new BinaryTree(4);
bt.left.right = new BinaryTree(5);
bt.left.right.left = new BinaryTree(7);
bt.left.right.left.right = new BinaryTree(8);
bt.right = new BinaryTree(3);
bt.right.right = new BinaryTree(6);

// console.log(bt);
console.log(superbalanced(bt));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
