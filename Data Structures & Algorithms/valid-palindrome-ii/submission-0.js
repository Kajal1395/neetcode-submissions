class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        let count = 0;
        let result = true;
        while (left <= right) {
            if (s[left] !== s[right]) {
                count++;
                if (count > 1) {
                    result = false;
                    break;
                }
            }
            left++;
            right--;
        }
        return result;
    }
}
