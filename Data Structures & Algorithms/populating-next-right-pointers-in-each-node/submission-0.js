/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, left = null, right = null, next = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} root
     * @return {Node}
     */
    connect(root) {
        function connectTree(node) {
            if (!node || !node.left) return;
            if (node.left && node.right) {
                node.left.next = node.right;
                if (node.next) {
                    node.right.next = node.next.left;
                }
            }
            connectTree(node.left);
            connectTree(node.right);
        }
        connectTree(root);
        return root;
    }
}
