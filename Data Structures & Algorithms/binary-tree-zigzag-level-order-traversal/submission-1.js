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
        if (!root) return [];
        if (!root.left && !root.right) return [[root.val]];
        let queue = [root];
        let treeLevel = 0;
        let temp = [];
        while (queue.length) {
            let size = queue.length;
            let count = 0;
            let level = [];
            while (count < size) {
                let node = queue.shift();
                level.push(node.val);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
                count++;
            }
            if (treeLevel % 2 !== 0) {
                level.reverse();
            }
            temp.push(level);
            treeLevel++;
        }
        return temp;
    }
}
