class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let n = s.length;
        let longest = 0;
        let len = 0;
        let left = 0;
        let right = left + 1;
        let seen = new Map();
        if(s.length===1) return 1
        while (right < n) {
            if (seen.has(s[right])) {
                left++;
                len--;
            }
            seen.set(s[right], 1);
            len++;
            right++;
            longest = Math.max(longest, len);
        }
        return longest;
    }
}
