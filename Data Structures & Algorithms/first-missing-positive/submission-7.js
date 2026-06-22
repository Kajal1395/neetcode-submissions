class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let expected = 1;
        while (nums.includes(expected)) {
            expected++;
        }
        return expected;
    }
}
