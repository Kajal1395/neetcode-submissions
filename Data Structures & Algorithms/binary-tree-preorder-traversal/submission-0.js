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
     * @return {number[]}
     */
    preorderTraversal(root, res = []) {
        if (!root) return res;

        res.push(root.val);
        this.preorderTraversal(root.left, res);
        this.preorderTraversal(root.right, res);
        return res;
    }
}
