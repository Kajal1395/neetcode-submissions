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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let res = 0;
        let ans;
        function dfs(node) {
            if (!node) return;
            dfs(node.left);
            res++;
            if (k === res) {
                ans = node.val;
                return;
            }
            dfs(node.right);
        }
        dfs(root);
        return ans;
    }
}
