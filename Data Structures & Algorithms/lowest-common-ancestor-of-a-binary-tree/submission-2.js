/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        function dfs(root, target, path) {
            if (!root) return false;
            path.push(root);
            if (root === target) return true;
            if (dfs(root.left, target, path)) return true;
            if (dfs(root.right, target, path)) return true;

            path.pop();
            return false;
        }
        let startPath = [];
        dfs(root, p, startPath);
        let endPath = [];
        dfs(root, q, endPath);
        let ind = 0;
        let ans;
        while (startPath[ind] === endPath[ind]) {
            ans = startPath[ind];
            ind++
        }
        return ans;
    }
}
