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
     * @param {number[]} inorder
     * @param {number[]} postorder
     * @return {TreeNode}
     */
    buildTree(inorder, postorder) {
        function construct(instart, inend, poststart, postend) {
            if (instart > inend) {
                return null;
            }
            let rootVal = postorder[postend];
            let rootIndex = inorder.indexOf(rootVal);
            let node = new TreeNode(rootVal);
            let leftSize = rootIndex - instart;
            node.left = construct(instart, rootIndex - 1, poststart, poststart + leftSize - 1);
            node.right = construct(rootIndex + 1, inend, poststart + leftSize, postend - 1);
            return node;
        }
        return construct(0, inorder.length - 1, 0, postorder.length - 1);
    }
}
