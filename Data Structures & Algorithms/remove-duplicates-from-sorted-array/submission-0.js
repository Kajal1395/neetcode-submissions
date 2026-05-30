class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let n = nums.length;
        let m = 1;
        for (let i = 1; i < n; i++) {
            if (nums[i] !== nums[i - 1]) {
                nums[m] = nums[i];
                m++;
            }
        }
        return m;
    }
}
