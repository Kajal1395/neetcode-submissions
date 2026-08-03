/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let dia = 0;

        function getDia(root) {
            let leftHeight = 0;
            let rightHeight = 0;
            if (!root) return 0;
            if (root.left) {
                leftHeight = getDia(root.left);
            }
            if (root.right) {
                rightHeight = getDia(root.right);
            }
            dia = Math.max(dia, leftHeight + rightHeight);
            return 1 + Math.max(leftHeight, rightHeight);
        }
        getDia(root);
        return dia;
    }
}
