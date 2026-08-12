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
        function build(leftIn, rightIn, preleft, preright) {
            if (leftIn > rightIn) return null;
            let root = preorder[preleft];
            let rootInd = inorder.indexOf(root);
            let node = new TreeNode(root);
            let leftSize = rootInd - leftIn;
            //preleft is consider root, so preleft for new subarr starts from preleft+1
            node.left = build(leftIn, rootInd - 1, preleft + 1, preleft + 1 + leftSize - 1);
            node.right = build(rootInd + 1, rightIn, preleft + 1 + leftSize, preright);
            return node;
        }
        return build(0, inorder.length - 1, 0, preorder.length - 1);
    }
}
