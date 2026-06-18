class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
        let n = str.length;
        let last = n - 1;
        for (let i = 0; i < Math.floor(n / 2); i++) {
            if (str[i] !== str[last]) {
                return false;
            }
            last--;
        }
        return true;
    }
}
