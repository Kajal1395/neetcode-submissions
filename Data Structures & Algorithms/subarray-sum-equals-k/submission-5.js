class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let sumMap = new Map();
        sumMap.set(0, 1);
        let n = nums.length;
        let sum = 0;
        let count = 0;
        for (let i = 0; i < n; i++) {
            sum += nums[i];
            let diff = sum - k;
            if (sumMap.has(diff)) {
                count += sumMap.get(diff);
            }
            sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
        }
        return count;
    }
}
