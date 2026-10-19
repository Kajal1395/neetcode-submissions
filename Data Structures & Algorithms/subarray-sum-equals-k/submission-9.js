class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let res = 0;
        for (let i = 0; i < nums.length; i++) {
            let total = 0;
            for (let j = i; j < nums.length; j++) {
                total += nums[j];
                if (total === k) {
                    res++;
                }
            }
        }
        return res;
    }
}
