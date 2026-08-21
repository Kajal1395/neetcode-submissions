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
    invertTree(root) {
        function invert(root) {
            if (!root) return null;
            [root.left, root.right] = [root.right, root.left];

            if (root.left) invert(root.left);
            if (root.right) invert(root.right);
            return root;
        }
        return invert(root);
    }
}
