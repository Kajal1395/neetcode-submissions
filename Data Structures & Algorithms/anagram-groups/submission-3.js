class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anaMap = new Map();
        let n = strs.length;
        for (let i = 0; i < n; i++) {
            let splited = strs[i].split("");
            let m = splited.length;
            for (let i = 0; i < m; i++) {
                for (let j = 0; j < m - 1 - i; j++) {
                    if (splited[j] > splited[j + 1]) {
                        [splited[j], splited[j + 1]] = [splited[j + 1], splited[j]];
                    }
                }
            }
            let sorted = splited.join("");
            if (!anaMap.has(sorted)) {
                anaMap.set(sorted, [strs[i]]);
            } else {
                anaMap.get(sorted).push(strs[i]);
            }
            console.log(anaMap.get(sorted), "map");
        }
        let res = [];
        for (let [key, value] of anaMap) {
            res.push(value);
        }
        return res;
    }
}
