class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let maxCount = -Infinity;
        for (let i = 0; i < nums.length; i++) {
            let current = nums[i];
            if (!set.has(nums[i] - 1)) {
                let count = 1;
                while (set.has(current + 1)) {
                    count++;
                    current++;
                }
                maxCount = Math.max(count, maxCount);
            }
        }
        return maxCount !== -Infinity ? maxCount : 0;
    }
}
