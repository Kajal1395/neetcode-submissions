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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root) return false;
        function isSameTree(p, q) {
            if (!p && !q) return true;
            if ((!p && q) || (!q && p)) return false;
            if (p && q && p.val !== q.val) return false;
            return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
        }
        if (root.val === subRoot.val && isSameTree(root, subRoot)) {
            return true;
        }
        let left = this.isSubtree(root.left, subRoot);
        let Right = this.isSubtree(root.right, subRoot);
        return left || Right;
    }
}
