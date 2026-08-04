class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let n = nums.length;

        let longest = -Infinity;
        for (let i = 0; i < n; i++) {
            let currEle = nums[i];
            let count = 0;
            while (set.has(currEle - 1)) {
                currEle++;
                count++;
            }
            longest = Math.max(longest, count);
        }
        return longest;
    }
}
