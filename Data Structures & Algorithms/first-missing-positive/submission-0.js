class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        nums.sort((a, b) => a - b);
        let missing = null;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0 && nums[i + 1] - nums[i] > 1) {
                missing = nums[i] + 1;
            }
        }
        return missing === null ? nums[nums.length - 1] + 1 : missing;
    }
}
