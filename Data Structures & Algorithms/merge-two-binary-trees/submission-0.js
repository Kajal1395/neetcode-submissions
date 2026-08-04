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
     * @param {TreeNode} root1
     * @param {TreeNode} root2
     * @return {TreeNode}
     */
    mergeTrees(root1, root2) {
        function buildTree(p, q) {
            if (!p && !q) return null;
            if (!p && q) return q;
            if (p && !q) return p;
            p.val += q.val;
            p.left = buildTree(p.left, q.left);
            p.right = buildTree(p.right, q.right);
            return p;
        }
        return buildTree(root1, root2);
    }
}
