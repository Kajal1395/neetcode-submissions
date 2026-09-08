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
        let res = [];
        function dfs(node) {
            if (!node) return;
            dfs(node.left);
            res.push(node);
            dfs(node.right);
        }
        dfs(root);
        let firstVInd = null;
        let secondVInd = null;
        for (let i = 1; i < res.length; i++) {
            if (res[i].val < res[i - 1].val) {
                if (firstVInd === null) {
                    firstVInd = i - 1;
                }
                secondVInd = i;
            }
        }
        [res[firstVInd].val, res[secondVInd].val] = [res[secondVInd].val, res[firstVInd].val];

    }
}
