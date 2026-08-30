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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let res = [];
        function dfs(root) {
            if (!root) {
                res.push("null");
                return;
            }
            if (root.val) {
                res.push(root.val);
            }
            dfs(root.left);
            dfs(root.right);
        }
        dfs(root);
        return res.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (!data) return null;
        let des = data.split(",");
        let ind = 0;
        function dfs() {
            let node = new TreeNode(des[ind]);
            if (node.val === undefined || node.val === "null") {
                ind++;
                return null;
            }
            ind++;

            node.left = dfs();
            node.right = dfs();
            return node;
        }
        return dfs();
    }
}
