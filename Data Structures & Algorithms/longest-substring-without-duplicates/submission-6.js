class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        let start = 0;
        let end = 0;
        let freqmap = new Map();
        while (end < s.length) {
            if (freqmap.has(s[end])) {
                while (freqmap.has(s[end])) {
                    freqmap.delete(s[start]);
                    start++;
                }
            }
            freqmap.set(s[end], 1);
            end++;
            longest = Math.max(longest, end - start);
        }
        return longest;
    }
}
