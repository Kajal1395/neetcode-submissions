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
    levelOrder(root) {
        if (!root) return [];
        if (root && !root.left && !root.right) return [[root.val]];
        let treeMap = new Map();
        let count = 1;
        treeMap.set(`level${count}`, [root]);
        while (treeMap.has(`level${count}`)) {
            let prevCount = count;
            count++;
            let children = treeMap.get(`level${prevCount}`);
            for (let x of children) {
                if (!treeMap.has(`level${count}`)) {
                    if (!x.left && !x.right) continue;
                    treeMap.set(`level${count}`, []);
                }
                if (x.left && !x.right) {
                    treeMap.get(`level${count}`).push(x.left);
                } else if (!x.left && x.right) {
                    treeMap.get(`level${count}`).push(x.right);
                } else if (!x.left && !x.right) {
                    continue;
                } else {
                    treeMap.get(`level${count}`).push(x.left, x.right);
                }
            }
        }

        let res = [];
        for (let [key, nodeArr] of treeMap) {
            res.push(nodeArr.map((obj) => obj.val));
        }
        return res;
    }
}
