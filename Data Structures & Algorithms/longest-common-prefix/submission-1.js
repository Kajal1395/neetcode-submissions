class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length <= 1) return strs[0];
        let minLen = Infinity;
        for (let i = 0; i < strs.length - 1; i++) {
            let len = 0;
            while (
                len < strs[i].length &&
                len < strs[i + 1].length &&
                strs[i][len] === strs[i + 1][len]
            ) {
                len++;
            }
            minLen = Math.min(len, minLen);
        }
        return minLen === Infinity ? "" : strs[0].slice(0, minLen);
    }
}
