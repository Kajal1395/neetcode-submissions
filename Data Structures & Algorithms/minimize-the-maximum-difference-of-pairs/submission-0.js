class Solution {
    /**
     * @param {number[]} nums
     * @param {number} p
     * @return {number}
     */
    minimizeMax(nums, p) {
        let low = 0;
        let n = nums.length;
        let high = Math.max(...nums) - Math.min(...nums);
        let ans = 0;
        nums.sort((a, b) => a - b);
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let pairFound = 0;
            for (let i = 0; i < n; i++) {
                if (Math.abs(nums[i] - nums[i + 1]) <= mid) {
                    pairFound++;
                }
            }
            if (pairFound >= p) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }
}
