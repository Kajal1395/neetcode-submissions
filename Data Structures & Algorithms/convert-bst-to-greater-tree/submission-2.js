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
     * @return {TreeNode}
     */
    convertBST(root) {
        let sum = 0;
        function dfs(root) {
            if (!root) return;
            dfs(root.right);

            sum += root.val;
            root.val = sum;
            dfs(root.left);
        }
        dfs(root);
        return root;
    }
}
