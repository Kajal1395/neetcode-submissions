class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let n = nums.length;
        let res = false;
        let seen = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (seen.has(nums[i])) {
                if (Math.abs(i - seen.get(nums[i]) <= k)) {
                    res = true;
                }
            }
            seen.set(nums[i], i);
        }
        return res;
    }
}
