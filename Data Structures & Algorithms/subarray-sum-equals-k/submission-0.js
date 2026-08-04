class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let n = nums.length;
        let count = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                let sum = 0;
                for (let r = i; r <= j; r++) {
                    sum += nums[r];
                }
                if (sum === k) {
                    count++;
                }
            }
        }
        return count;
    }
}
