class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        nums.sort((a, b) => a - b);
        let n = nums.length;
        let expected = 1;
        for (let i = 0; i < n; i++) {
            if (nums[i] === nums[i + 1]) continue;
            if (nums[i] === expected) {
                console.log(nums[i], "i equal");
                expected++;
            } else if (nums[i] !== expected && nums[i] > 0) {
                console.log(nums[i], "i");
                return expected;
            }
        }

        return expected;
    }
}
