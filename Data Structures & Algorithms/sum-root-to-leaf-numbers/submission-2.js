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
     * @return {number}
     */
    sumNumbers(root) {
        function dfs(root) {
            if (!root) return [];
            if (!root.left && !root.right) {
                return [`${root.val}`];
            }
            let left = dfs(root.left);
            let right = dfs(root.right);

            return [
                ...left.map((ele) => `${root.val}${ele}`),
                ...right.map((ele) => `${root.val}${ele}`),
            ];
        }
        let res = dfs(root);
        let result = res.reduce((acc, num) => acc + Number(num), 0);
        return result;
    }
}
