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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        function pathsum(root, sum) {
            if (!root) return false;
       
            sum += root.val;
            if (!root.left && !root.right) {
                return sum === targetSum;
            }
            return pathsum(root.left, sum) || pathsum(root.right, sum);
        }
        return pathsum(root, 0);
    }
}
