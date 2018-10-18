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

function validBST(tree, min, max) {
    let curr = tree;
    if (curr.left) {
        if (!max || curr.value > max) {
            max = curr.value;
        } 
        return validBST(curr.left, min, max);
    }
    if (curr.right) {
        if (!min || curr.value < min) {
            min = curr.value;
        }
        return validBST(curr.right, min, max);
    }
    if (curr > max || curr < min) {
        return false;
    }
    return true;
}


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
