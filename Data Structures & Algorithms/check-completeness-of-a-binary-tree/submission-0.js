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
    isCompleteTree(root) {
        let seenNull = false;
        let queue = [root];
        while (queue.length) {
            let node = queue.shift();
            if (!node) {
                seenNull = true;
                continue;
            }
            if (seenNull) return false;
            queue.push(node.left);
            queue.push(node.right);
        }
        return true;
    }
}
