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
        let right = 0;
        let seen = new Map();
        if (s.length === 1) return 1;
        while (right < n) {
            while (seen.has(s[right])) {
                seen.set(s[left], seen.get(s[left]) - 1);
                if (seen.get(s[left]) === 0) {
                    seen.delete(s[left]);
                }
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
