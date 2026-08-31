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
        function nextptr(root) {
            if (!root) return;
            if (root.left && root.right) {
                root.left.next = root.right;
                if (root.next) {
                    root.right.next = root.next.left;
                }
            }
            nextptr(root.left);
            nextptr(root.right);
        }
        nextptr(root);
        return root;
    }
}
