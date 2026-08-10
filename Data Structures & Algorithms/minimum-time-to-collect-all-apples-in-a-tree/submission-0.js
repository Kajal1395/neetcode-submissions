class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {boolean[]} hasApple
     * @return {number}
     */
    minTime(n, edges, hasApple) {
        let graph = new Map();
        let key = 0;
        while (key < n) {
            let valArr = edges
                .filter((edge) => edge[0] === key || edge[1] === key)
                .map((edge) => (edge[0] === key ? edge[1] : edge[0]));
            graph.set(key, valArr);
            key++;
        }
        console.log(graph, "graph");

        function traverse(root, parent) {
            let time = 0;

            for (let child of graph.get(root)) {
                if (child === parent) continue;
                time += traverse(child, root);
            }
            if (parent !== -1 && (hasApple[root] || time > 0)) {
                time += 2;
            }
            return time;
        }
        return traverse(0, -1);
    }
}
