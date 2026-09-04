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
        let queue = [root];
        let seenNull = false;
        while (queue.length) {
            let node = queue.shift();
            console.log(node, "node");
            if (!node) {
                seenNull = true;
                continue
            }
            if (seenNull && node) {
                return false;
            }

            queue.push(node.left);
            queue.push(node.right);
        }
        return true;
    }
}
