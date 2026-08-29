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
        function calSum(root) {
            if (!root) return 0;
            let left = Math.max(0, calSum(root.left));
            let right = Math.max(0, calSum(root.right));
            maxSum = Math.max(left + root.val + right, maxSum);
            return root.val + Math.max(left, right);
        }
        calSum(root);
        return maxSum;
    }
}
