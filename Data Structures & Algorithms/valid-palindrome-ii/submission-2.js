class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        function isPalindrome(str) {
            let start = 0;
            let end = str.length - 1;
            while (start <= end) {
                if (str[start] !== str[end]) {
                    return false;
                }
                start++
                end--
            }
            return true;
        }
        if (isPalindrome(s)) return true;
        for (let i = 0; i < s.length; i++) {
            let str = s.slice(0, i) + s.slice(i + 1, s.length);
            if (isPalindrome(str)) {
                return true;
            }
        }
        return false;
    }
}
