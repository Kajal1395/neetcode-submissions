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
    maxDepth(root) {
        let len = 1;
        let maxLen = -Infinity;
        function depth(root) {
            if (root) {
                len++;
                maxLen = Math.max(len, maxLen);
                depth(root.left);
                len--;
                depth(root.right);
                len--;
            }
        }
        depth(root);
        return maxLen === -Infinity ? 0 : maxLen;
    }
}
