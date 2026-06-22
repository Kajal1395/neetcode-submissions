class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let n = nums.length;
        if (nums.length === 1) return 1;

        let longest = -Infinity;
        for (let i = 0; i < n; i++) {
            if (!set.has(nums[i] - 1)) {
                let currEle = nums[i];
                let count = 1;
                while (set.has(currEle + 1)) {
                    currEle++;
                    count++;
                }
                longest = Math.max(longest, count);
            }
        }
        return longest === -Infinity ? 0 : longest;
    }
}
