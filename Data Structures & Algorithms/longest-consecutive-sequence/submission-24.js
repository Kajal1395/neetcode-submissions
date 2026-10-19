class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = -Infinity;
        let seen = new Set(nums);
        console.log(seen, "seen");
        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i];
            let count = 1;
            if (!seen.has(curr - 1)) {
                while (seen.has(curr + 1)) {
                    curr++;
                    count++;
                }
            }
            longest = Math.max(longest, count);
        }
        return longest === -Infinity ? 0 : longest;
    }
}
