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
    goodNodes(root) {
        function dfs(node, maxVal) {
            if (!node) return 0;
            let count = 0;
            if (node.val >= maxVal) {
                maxVal = node.val;
                count++;
            }
            let left = dfs(node.left, maxVal);
            let right = dfs(node.right, maxVal);
            return count + left + right;
        }
        return dfs(root, -Infinity);
    }
}
