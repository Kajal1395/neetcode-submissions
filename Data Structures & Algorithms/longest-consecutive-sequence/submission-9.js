class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return nums.length;
        let longest = 1;
        let count = 1;
        let conSet = new Set(nums);
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) continue;
            if (!conSet.has(nums[i] - 1)) {
                count = 1;
            } else {
                count++;
            }
            longest = Math.max(longest, count);
        }
        return longest;
    }
}
