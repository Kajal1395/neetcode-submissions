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
    rob(root) {
        function dfs(node) {
            if (!node) return [0, 0];

            let left = dfs(node.left);
            let right = dfs(node.right);
            return [node.val + left[1] + right[1], Math.max(...left) + Math.max(...right)];
        }
        let res = dfs(root);
        return Math.max(...res)
    }
}
