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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        if (!root) return new TreeNode(val);
        function dfs(root) {
            if (root.val > val) {
                if (root.left) {
                    dfs(root.left);
                } else {
                    root.left = new TreeNode(val);
                }
            } else {
                if (root.right) {
                    dfs(root.right);
                } else {
                    root.right = new TreeNode(val);
                }
            }
        }
        dfs(root);
        return root;
    }
}
