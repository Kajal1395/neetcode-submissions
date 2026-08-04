class Solution {
    /**
     * @param {number[]} nums
     * @param {number} limit
     * @return {number}
     */
    longestSubarray(nums, limit) {
        let longest = 0;
        let n = nums.length;
        for (let i = 0; i < n; i++) {
            let len = 0;
            for (let j = i; j < n; i++) {
                if (Math.abs(nums[j] - nums[i]) <= limit) {
                    len++;
                } else {
                    break;
                }
            }
            longest = Math.max(longest, len);
        }
        return longest;
    }
}
