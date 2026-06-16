class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums, k) {
        let maxFreq = 1;
        let n = nums.length;
        nums.sort((a, b) => a - b);
        for (let target = 0; target < n; target++) {
            let freq = 1;
            let cost = 0;
            for (let left = target - 1; left >= 0; left--) {
                cost += nums[target] - nums[left];
                if (cost <= k) {
                    freq++;
                } else {
                    break;
                }
            }
            maxFreq = Math.max(maxFreq, freq);
        }
        return maxFreq;
    }
}
