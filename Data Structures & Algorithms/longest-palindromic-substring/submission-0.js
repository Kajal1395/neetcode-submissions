class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let maxLen = -Infinity;
        let ans = "";
        function expand(left, right) {
            let len = 0;
            while (left >= 0 && right < s.length) {
                if (s[left] === s[right]) {
                    left--;
                    right++;
                    len = right - left - 1;
                } else {
                    break;
                }
                if (len > maxLen) {
                    //palindrome is between left+1,right-1
                    ans = s.slice(left + 1, right);
                    maxLen = len;
                }
            }
        }
        for (let i = 0; i < s.length; i++) {
            expand(i, i);
            expand(i, i + 1);
        }
        return ans;
    }
}
