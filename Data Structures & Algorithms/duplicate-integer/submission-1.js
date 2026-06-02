class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result = false;
        let numMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            numMap.set(nums[i], (numMap.get(nums[i]) || 0) + 1);
            if (numMap.get(nums[i]) > 1) {
                result = true;
                break;
            }
        }
        return result;
    }
}
