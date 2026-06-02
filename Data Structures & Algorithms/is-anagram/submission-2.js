class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sMap = new Map();
        let tMap = new Map();
        for (let x of s) {
            sMap.set(x, (sMap.get(x) || 0) + 1);
        }
        for (let x of t) {
            tMap.set(x, (tMap.get(x) || 0) + 1);
        }
        for (let [key, val] of tMap) {
            console.log(sMap.get(key), "key", key,val);
            if (sMap.size!==tMap.size || sMap.get(key) !== val) {
                return false;
            }
        }
        return true;
    }
}
