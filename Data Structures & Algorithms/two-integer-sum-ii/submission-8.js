class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let low = 0;
        let high = nums.length - 1;
        while (low < high) {
            if (nums[low] + nums[high] === target) {
                return [low + 1, high + 1];
            } else if (nums[low] + nums[high] < target) {
                low++;
            } else if (nums[low] + nums[high] > target) {
                high--;
            }
        }
    }
}
