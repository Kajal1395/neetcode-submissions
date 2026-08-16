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
    goodNodes(root) {
        function goodNodeCount(node, maxsofar) {
            if (!node) return 0;
            let currCount = 0;
            if (node.val >= maxsofar) {
                currCount += 1;
                maxsofar = node.val;
            }
            let leftCount = 0;
            if (node.left) {
                leftCount = goodNodeCount(node.left, maxsofar);
            }
            let rightCount = 0;
            if (node.right) {
                rightCount = goodNodeCount(node.right, maxsofar);
            }
            return currCount + leftCount + rightCount;
        }
        return goodNodeCount(root, -Infinity);
    }
}
