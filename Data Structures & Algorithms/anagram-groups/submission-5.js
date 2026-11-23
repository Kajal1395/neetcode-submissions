class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anaMap = new Map();
        for (let str of strs) {
            let key = str.split("").sort().join("");
            if (!anaMap.has(key)) {
                anaMap.set(key, []);
            }
            anaMap.get(key).push(str);
        }
        let res = [];
        for (let [key, value] of anaMap) {
            res.push(value);
        }
        return res;
    }
}
