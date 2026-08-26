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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        function issame(root1, root2) {
            if ((root1 && !root2) || (!root1 && root2)) return false;
            if (!root1 && !root2) return true;
            let left = issame(root1.left, root2.left);
            let right = issame(root1.right, root2.right);
            if (root1.val !== root2.val) {
                return false;
            }
            return left && right;
        }
        return issame(p, q);
    }
}
