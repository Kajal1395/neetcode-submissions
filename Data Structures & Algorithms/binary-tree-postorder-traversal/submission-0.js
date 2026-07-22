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
    postorderTraversal(root, res = []) {
        if (!root) return res;
        this.postorderTraversal(root.left, res);
        this.postorderTraversal(root.right, res);
        res.push(root.val);
        return res;
    }
}
