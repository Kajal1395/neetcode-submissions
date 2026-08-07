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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return [];
        if (root && !root.left && !root.right) return [root.val];
        let queue = [];
        queue.push(root);
        let res = [];
        while (queue.length) {
            let size = queue.length;
            let count = 0;
            let level = [];
            while (count < size) {
                let node = queue.shift();
                level.push(node.val);
                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
                count++;
            }

            res.push(level[level.length - 1]);
        }
        console.log(res);
        return res;
    }
}
