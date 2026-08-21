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
        let diameter = 0;
        function dia(root) {
            if (!root) return 0;
            if (!root.left && !root.right) return 1;
            let left = dia(root.left);
            let right = dia(root.right);
            diameter = Math.max(diameter, left + right);
            return 1 + Math.max(left, right);
        }
        dia(root);
        return diameter;
    }
}
