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
     * @return {boolean}
     */
    isValidBST(root) {
        function isValid(node, lower, upper) {
            if (!node) return true;
            console.log(node.val, "nod");
            if (node.val >= upper || node.val <= lower) return false;

            //anything on left should be less than me upper val
            let left = isValid(node.left, lower, node.val);
            //anything on right should be greater than  node.val and lower val
            let right = isValid(node.right, node.val, upper);

            return left && right;
        }
        return isValid(root, -Infinity, Infinity);
    }
}
