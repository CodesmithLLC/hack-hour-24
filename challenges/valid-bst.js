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
    // check conditions
    if ((tree.left != null && tree.left.value > tree.value) || (tree.right != null && tree.right.value < tree.value))
        return false;
    if (tree.left != null && !validBST(tree.left))
        return false;
    if (tree.right != null && !validBST(tree.right))
        return false;
    return true;
}

bt1 = new BinaryTree(2);
bt2 = new BinaryTree(4);
bt3 = new BinaryTree(5);
bt4 = new BinaryTree(6);
bt5 = new BinaryTree(8);

bt2.left = bt1;
bt3.left = bt2;
bt3.right = bt4;
bt4.left = bt5;

console.log(validBST(bt3));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
