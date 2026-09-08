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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        function dfs(instart, inend, prestart, preend) {
            if (instart > inend) return null;
            let root = preorder[prestart];
            let rootInd = inorder.indexOf(root);
            let node = new TreeNode(root);
            let leftSize = rootInd - instart;
           
            node.left = dfs(instart, rootInd - 1, prestart + 1, prestart + leftSize);
            node.right = dfs(rootInd + 1, inend, prestart + 1 + leftSize, preend);
            return node;
        }
        return dfs(0, inorder.length - 1, 0, preorder.length - 1);
    }
}
