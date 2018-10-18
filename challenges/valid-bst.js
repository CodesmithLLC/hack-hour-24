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

// function maxValue(tr) {
//     if (!tr.right) return tr.value;
//     return maxValue(tr.right);
// }
// function minValue(tr) {
//     if (!tr.left) return tr.value;
//     return minValue(tr.left);
// }

// function validBST(tree) {
//   if (tree === null) {
//     return true;
//   }
//   // false, if the max of the left is > than val
//   if (tree.left !== null && maxValue(tree.left) > tree.value) {
//     return false;
//   }
//   // false, if the min of the right is < than val
//   if (tree.right !== null && minValue(tree.right) < tree.value) {
//     return false;
//   }
//   // false, if recursively, the left or right is not a BST 
//   if (!validBST(tree.left) || !validBST(tree.right)) {
//     return false;
//   }
//   return true;
// }

function helper(tree, low, high) {
    console.log(tree, low, high)
    if (!tree) return true;
    if (low < tree.value && tree.value < high) {
      return helper(tree.left, low, tree.value) && helper(tree.right, tree.value, high);
    }
    return false;
} 
function validBST (tree) {
    // console.log(tree,'tre')
  return helper(tree, -Infinity, Infinity);  
}
  //   5
  //1    8
//-2 3  6  9
const testTree = new BinaryTree(5);
testTree.left = new BinaryTree(1);
// testTree.left.left = new BinaryTree(-2);
// testTree.left.right = new BinaryTree(3);

testTree.right = new BinaryTree(8);
// testTree.right.left = new BinaryTree(6);
// testTree.right.right = new BinaryTree(9);



// console.log(maxValue(testTree), minValue(testTree));
console.log(validBST(testTree));
module.exports = {BinaryTree: BinaryTree, validBST: validBST};
