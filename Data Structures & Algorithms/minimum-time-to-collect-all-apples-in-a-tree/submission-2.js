class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {boolean[]} hasApple
     * @return {number}
     */
    minTime(n, edges, hasApple) {
        let map = new Map();
        for (let i = 0; i < n; i++) map.set(i, []);
        for (let edge of edges) {
            map.get(edge[0]).push(edge[1]);
            map.get(edge[1]).push(edge[0]);
        }
        function dfs(node, parent) {
            let time = 0;
            for (let child of map.get(node) || []) {
                if (child === parent) continue;
                let childTime = dfs(child, node);
                if (childTime > 0 || hasApple[child]) {
                    time += childTime + 2;
                }
            }
            return time;
        }
        return dfs(0, -1);
    }
}
