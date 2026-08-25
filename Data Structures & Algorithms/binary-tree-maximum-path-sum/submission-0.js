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
    maxPathSum(root) {
        let maxSum = -Infinity;
        function dfs(root) {
            if (!root) return 0;
            let left = Math.max(0, dfs(root.left));
            let right = Math.max(0, dfs(root.right));
            let currentPath = left + root.val + right;
            maxSum = Math.max(maxSum, currentPath);
            return root.val + Math.max(left, right);
        }
        dfs(root);
        return maxSum;
    }
}
