class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        let maxLen = 1;
        let sorted = nums.sort((a, b) => a - b);
        let len = 1;
        for (let i = 0; i < sorted.length; i++) {
            if (sorted[i] === sorted[i - 1]) continue;
            if (sorted[i] - sorted[i - 1] === 1) {
                len++;
            } else {
                len = 1;
            }
            maxLen = Math.max(maxLen, len);
        }
        return maxLen;
    }
}
