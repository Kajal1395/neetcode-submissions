class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length; i++) {
            let pos = Math.abs(nums[i]) - 1;
            if (nums[pos] < 0) {
                return Math.abs(nums[i]);
            } else {
                nums[pos] *= -1;
            }
        }
    }
}
