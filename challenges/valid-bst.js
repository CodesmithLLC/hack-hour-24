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
    const currVal = tree.value
    let leftCheck = true;
    let rightCheck = true;

    if (tree.left === null && tree.right === null) { return true };
    if (tree.left) {
        leftCheck = leftBranchCheck(tree.left)
    }
    if (tree.right) {
        rightCheck = rightBranchCheck(tree.right)
    }

    leftBranchCheck(branch){
        if (branch.value > currVal) {
            return false
        }
        if (branch.left && branch.left > currVal) { return false };
        if (branch.right && branch.right > currVal) { return false };
        if (branch.left && branch.left < currVal) {
            return leftBranchCheck(branch.left)
        }
        if (branch.right && branch.right < currVal) { 
            return leftBranchCheck(branch.right)
        }
        if (branch.right === null && branch.left === null) { return true }
    }

    rightBranchCheck(branch){
        if (branch.value < currVal) {
            return false
        }
        if (branch.left && branch.left < currVal) { return false };
        if (branch.right && branch.right < currVal) { return false };
        if (branch.left && branch.left > currVal) {
            return rightBranchCheck(branch.left)
        }
        if (branch.right && branch.right > currVal) { 
            return rightBranchCheck(branch.right)
        }
        if (branch.right === null && branch.left === null) { return true }
    }

    if (leftCheck && rightCheck) {

    }
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
