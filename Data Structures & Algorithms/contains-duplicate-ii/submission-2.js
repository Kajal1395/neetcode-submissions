class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let n = nums.length;
        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                if (nums[i] + nums[j] <= k) {
                    return true;
                }
            }
        }
        return false;
    }
}
