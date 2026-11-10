class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        let minval = Infinity;
        nums.sort((a, b) => a - b);
        for (let i = 0; i <= nums.length - k; i++) {
            minval = Math.min(nums[i + k - 1] - nums[i], minval);
        }
        return minval;
    }
}
