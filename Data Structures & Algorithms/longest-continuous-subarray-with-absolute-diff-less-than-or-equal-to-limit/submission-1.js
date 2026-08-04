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
            for (let j = i; j < n; j++) {
                if (Math.abs(nums[j] - nums[i]) <= limit) {
                    len++;
                } else {
                    break;
                }
            }
            console.log(nums[i], "i",i,'len', len);
            longest = Math.max(longest, len);
        }
        return longest;
    }
}
