class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraysWithKDistinct(nums, k) {
        let n = nums.length;
        let count = 0;

        for (let left = 0; left < n; left++) {
            let unique = new Map();
            let distinctK = 0;
            for (let right = left; right < n; right++) {
                // while (distinctK < k) {
                if (!unique.has(nums[right])) {
                    unique.set(nums[right], 0);
                    distinctK++;
                }
                unique.set(nums[right], unique.get(nums[right]) + 1);

                if (distinctK === k) {
                    count++;
                }

                if (distinctK > k) {
                    break;
                }
            }
        }
        return count;
    }
}
