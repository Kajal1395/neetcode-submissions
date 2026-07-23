/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, children = []) {
 *         this.val = val;
 *         this.children = children;
 *     }
 * }
 */
class Solution {
    /**
     * @param {Node|null} root
     * @return {number[]}
     */
    postorder(root) {
        let res = [];
        function pstOrder(root) {
            if (!root) return;
            for (let child of root.children) {
                pstOrder(child);
            }

            res.push(root.val);
        }
        pstOrder(root);
        return res;
    }
}
