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
    if (tree.left === null && tree.right === null) return true;
    let queue = [tree];

    while (queue.length > 0) {
        let currNode = queue.shift();

        if (currNode.left !== null && currNode.value < currNode.left.value) {
            return false;
        }
        if (currNode.right !== null && currNode.value > currNode.right.value) {
            return false;
        }
        queue.push(currNode.left);
        queue.push(currNode.right);
    }
    // check the value, if the left and right are not null
    // if it passes the test, add left and right to a queue and start over
    // if it fails return false
    return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
