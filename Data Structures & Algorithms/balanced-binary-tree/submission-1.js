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
     * @return {boolean}
     */
    isBalanced(root) {
        function check(root) {
            if (!root) return 0;

            let left = check(root.left);
            if (left === -1) return -1;

            let right = check(root.right);
            if (right === -1) return -1;

            if (Math.abs(left - right) > 1) {
                return -1;
            }
            return 1 + Math.max(left, right);
        }
        return check(root) !== -1;
    }
}
