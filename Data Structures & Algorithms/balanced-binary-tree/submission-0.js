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
        function getHt(root) {
            if (!root) return 0;

            let leftHt = getHt(root.left);
            if (leftHt === -1) return -1;

            let rightHt = getHt(root.right);
            if (rightHt === -1) return -1;
            if (Math.abs(leftHt - rightHt) > 1) {
                return -1;
            } else {
                return 1 + Math.max(leftHt, rightHt);
            }
        }
        return getHt(root) !== -1;
    }
}
