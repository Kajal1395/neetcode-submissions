class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return nums.length;
        let longest = 1;
        let conSet = new Set(nums);
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) continue;
            let current = nums[i];
            let count = 1;
            while (conSet.has(current + 1)) {
                current++;
                count++;
            }
            longest = Math.max(longest, count);
        }
        return longest;
    }
}
