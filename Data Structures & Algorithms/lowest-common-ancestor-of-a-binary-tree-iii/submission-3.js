/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * }
 */
class Solution {
    /**
     * @param {Node} p
     * @param {Node} q
     * @return {Node}
     */
    lowestCommonAncestor(a, b) {
        let p = a;
        let q = b;
        while (q !== p) {
            p = p.parent === null ? b : p.parent;
            q = q.parent === null ? a : q.parent;
        }
        return p;
    }
}
