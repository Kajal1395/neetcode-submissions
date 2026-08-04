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
        let sum = 0;
        function pathsum(root) {
            if (!root) return false;
            sum += root.val;
            if (!root.left && !root.right && sum === targetSum) {
                return true;
            }
            let leftSum = pathsum(root.left);

            let rightSum = pathsum(root.right);
            sum -= root.val;
            return leftSum || rightSum;
        }
        return pathsum(root);
    }
}
