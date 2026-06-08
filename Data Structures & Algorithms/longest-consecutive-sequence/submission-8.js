class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums.sort((a, b) => a - b);
        if (nums.length === 0) return nums.length;
        let longest = 1;
        let count = 1;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) continue;
            if (nums[i] === nums[i - 1] + 1) {
                count++;
            } else {
                count = 1;
            }
            longest = Math.max(longest, count);
        }
        return longest;
    }
}
