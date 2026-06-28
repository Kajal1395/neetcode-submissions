class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        nums.sort((a, b) => a - b);
        let minDiff = Infinity;
        for (let i = 0; i <= nums.length - k; i++) {
            minDiff = Math.min(nums[i + k - 1] - nums[i], minDiff);
        }
        return minDiff;
    }
}
