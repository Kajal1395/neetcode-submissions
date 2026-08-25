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
            res.push(root.val);
            dfs(root.left);
            dfs(root.right);
        }
        dfs(root);
        console.log(res);
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
        let root = data.split(",");
        let i = 0;
        function buildTree() {
            let nodeVal = root[i];
            i++;
            if (nodeVal === "null" || nodeVal === undefined) return null;
            let node = new TreeNode(Number(nodeVal));
            node.left = buildTree();
            node.right = buildTree();
            return node;
        }
        return buildTree();
    }
}
