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
     * @param {number} low
     * @param {number} high
     * @return {number}
     */
    rangeSumBST(root, low, high) {
        let sum = 0;
        function sumBst(root) {
            if (!root) return 0;
            if (root.val < low) {
                sumBst(root.right);
                return;
            }
            if (root.val > high) {
                sumBst(root.left);
                return;
            }
            if (root.val <= high && root.val >= low) {
                sum += root.val;
                sumBst(root.left);
                sumBst(root.right);
            }
        }
        sumBst(root);

        return sum;
    }
}
