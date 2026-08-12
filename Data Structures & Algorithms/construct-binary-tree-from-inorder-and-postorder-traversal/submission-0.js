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
        function build(leftIn, rightIn, leftPost, rightPost) {
            if (leftIn > rightIn) {
                return null;
            }
            let rootVal = postorder[rightPost];
            let rootIndex = inorder.indexOf(rootVal);
            let node = new TreeNode(rootVal);
            let leftSize = rootIndex - leftIn;
            node.left = build(leftIn, rootIndex - 1, leftPost, leftPost + leftSize - 1);
            node.right = build(rootIndex + 1, rightIn, leftPost + leftSize, rightPost - 1);
            return node;
        }
        let leftIn = 0;
        let rightIn = inorder.length - 1;
        let leftPost = 0;
        let rightPost = postorder.length - 1;
        return build(leftIn, rightIn, leftPost, rightPost);
    }
}
