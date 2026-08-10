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
     * @return {number[][]}
     */
    zigzagLevelOrder(root) {
        let res = [];
        let queue = [root];
        let levno = 0;
        if (!root) return [];
        if (root && !root.left && !root.right) return [[root.val]];
        while (queue.length) {
            let size = queue.length;
            let count = 0;
            let level = [];
            while (count < size) {
                let node = queue.shift();
                level.push(node.val);
                count++;
                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
            }
            if (levno % 2 !== 0) {
                let low = 0;
                let high = level.length - 1;
                while (low < high) {
                    [level[low], level[high]] = [level[high], level[low]];
                    low++;
                    high--;
                }
            }
            res.push(level);
            levno++;
        }
        return res;
    }
}
