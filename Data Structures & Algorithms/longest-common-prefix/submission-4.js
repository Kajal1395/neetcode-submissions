class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length === 0) return "";
        if (strs.length === 1) return strs[0];
        let min = Infinity;
        function helper(word1, word2) {
            let ind = 0;
            while (ind < word1.length && ind < word2.length && word1[ind] === word2[ind]) {
                ind++;
            }
            return ind;
        }
        for (let i = 0; i < strs.length; i++) {
            for (let j = i + 1; j < strs.length; j++) {
                let res = helper(strs[i], strs[j]);
                min = Math.min(res, min);
            }
        }
        return min !== Infinity ? strs[0].slice(0, min) : "";
    }
}
