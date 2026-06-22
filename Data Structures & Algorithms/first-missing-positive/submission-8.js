class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let set = new Set(nums);
        let expected = 1;
        while (set.has(expected)) {
            expected++;
        }
        return expected;
    }
}
