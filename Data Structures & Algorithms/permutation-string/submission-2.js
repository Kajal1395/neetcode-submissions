class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s = s1.split("").sort().join("");
        console.log(s, "s");
        let n = s2.length;
        for (let i = 0; i < n; i++) {
            let str = s2.slice(i, i + s1.length);
            let sorted = str.split("").sort().join("");
            if (s === sorted) {
                return true;
            }
        }
        return false;
    }
}
