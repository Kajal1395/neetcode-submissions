class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        nums.sort((a, b) => a - b);
        let expected = 1;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < expected) continue;
            if (nums[i] === expected) {
                expected++;
            } else {
                return expected;
            }
        }
        return expected;
    }
}
