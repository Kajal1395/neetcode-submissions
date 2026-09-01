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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if (!root) return null;
        if (root.val === key) {
            if (!root.left) {
                return root.right;
            }
            if (!root.right) {
                return root.left;
            }
            let successorParent = root;
            let successor = root.right;
            while (successor.left) {
                successorParent = successor;
                successor = successor.left;
            }
            root.val = successor.val;
            if (successorParent.left === successor) {
                successorParent.left = successor.right;
            } else {
                successorParent.right = successor.right;
            }
            return root;
        }
        function dfs(root, parent) {
            if (!root) return;
            if (root.val === key) {
                if (!root.left && !root.right) {
                    if (parent.left === root) {
                        parent.left = null;
                    } else {
                        parent.right = null;
                    }
                    return;
                }
                if (!root.right) {
                    if (parent.left == root) {
                        parent.left = root.left;
                    } else {
                        parent.right = root.left;
                    }
                    return;
                }
                if (!root.left) {
                    if (parent.left == root) {
                        parent.left = root.right;
                    } else {
                        parent.right = root.right;
                    }
                    return;
                }
                let successorParent = root;
                let successor = root.right;
                while (successor.left) {
                    successorParent = successor;
                    successor = successor.left;
                }
                root.val = successor.val;
                if (successorParent.left === successor) {
                    successorParent.left = successor.right;
                } else {
                    successorParent.right = successor.right;
                }
                return;
            }
            if (root.val > key) {
                dfs(root.left, root);
            } else {
                dfs(root.right, root);
            }
        }
        dfs(root, null);
        return root;
    }
}
