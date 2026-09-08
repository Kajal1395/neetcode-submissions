/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {void} Do not return anything, modify root in-place instead.
     */
    recoverTree(root) {
        let prev = null;
        let firstVInd = null;
        let secondVInd = null;
        function dfs(node) {
            if (!node) return;
            dfs(node.left);
            if (prev && node.val < prev.val) {
                if (firstVInd === null) {
                    firstVInd = prev;
                }
                secondVInd = node;
            }

            prev = node;
            dfs(node.right);
        }
        dfs(root);
        [firstVInd.val, secondVInd.val] =
    [secondVInd.val, firstVInd.val];
    }
}
