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
            let minVal = nums[i];
            let maxVal = nums[i];
            for (let j = i; j < n; j++) {
                minVal = Math.min(minVal, nums[j]);
                maxVal = Math.max(maxVal, nums[j]);
                if (Math.abs(maxVal - minVal) <= limit) {
                    len = j - i + 1;
                } else {
                    break;
                }
            }
            console.log(nums[i], "i", i, "len", len);
            longest = Math.max(longest, len);
        }
        return longest;
    }
}
