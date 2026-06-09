class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(nums) {
        let maxProfit = 0;
        let n = nums.length;
        for (let i = 0; i < n; i++) {
            if (nums[i + 1] > nums[i]) {
                maxProfit += nums[i + 1] - nums[i];
            }
        }
        return maxProfit
    }
}
