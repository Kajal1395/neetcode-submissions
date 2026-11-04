class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        let seen = new Map();
        for (let x of arr) {
            seen.set(x, (seen.get(x) || 0) + 1);
        }
        console.log(seen, "seen");
        let res = [];
        for (let [key, value] of seen) {
            if (value === 1) {
                res.push(key);
            }
        }
        if (res.length < k) return "";
        return res[k - 1];
    }
}
