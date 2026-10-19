class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let res = new Map();
        res.set(0, 1);
        let total = 0;
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            total += nums[i];
            let diff = total - k;
            if (res.has(diff)) {
                count += res.get(diff);
            }
            res.set(total, (res.get(total) || 0) + 1);
        }
        return count;
    }
}
