class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        s = s.trim(" ");
        let str = s.split(" ");
        return str[str.length - 1].length;
    }
}
