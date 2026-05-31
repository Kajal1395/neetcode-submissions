class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let minLen = Infinity;

        for (let i = 0; i < strs.length; i++) {
            for (let j = i + 1; j < strs.length; j++) {
                let k = 0;
                while (k < strs[i].length && k < strs[j].length && strs[i][k] === strs[j][k]) {
                    k++;
                }
                minLen = Math.min(minLen, k);
            }
        }

        return strs[0].slice(0, minLen === Infinity ? strs[0].length : minLen);
    }
}
