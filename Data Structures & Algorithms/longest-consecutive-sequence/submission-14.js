class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = new Set(nums);
        let n = nums.length;
        let maxLen = 0;
        for (let i = 0; i < n; i++) {
            let count = 0;
            let curr = nums[i];
            if (!longest.has(curr - 1)) {
                count = 1;
                while (longest.has(curr + 1)) {
                    curr++;
                    count++;
                }
            }
            maxLen = Math.max(maxLen, count);
        }
        return maxLen;
    }
}
