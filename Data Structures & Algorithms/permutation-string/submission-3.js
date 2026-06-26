class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let n = s2.length;
        let left = 0;
        let right = 0;
        let str = "";
        while (right < n) {
            str += s2[right];
            if (str.length > s1.length) {
                str = s2.slice(left + 1, right + 1);
                left++;
            }
            if (str.length === s1.length) {
                if (str.split("").sort().join("") === s1.split("").sort().join("")) {
                    return true;
                }
            }

            right++;
        }
        return false;
    }
}
