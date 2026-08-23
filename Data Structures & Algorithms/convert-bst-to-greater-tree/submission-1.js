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
     * @return {TreeNode}
     */
    convertBST(root) {
        let sum = 0;
        function greaterBST(root) {
            if (!root) return;
            //traverse right=>root=>left
            greaterBST(root.right);
            sum += root.val;
            root.val = sum;
            greaterBST(root.left);
        }
        greaterBST(root);
        return root;
    }
}
