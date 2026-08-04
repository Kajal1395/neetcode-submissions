class Solution {
    /**
     * @param {number[]} nums
     * @param {number} p
     * @return {number}
     */
    minimizeMax(nums, p) {
        //here mid represent max min difference allowed
        nums.sort((a, b) => a - b);
        let low = 0;
        let high = Math.max(...nums) - Math.min(...nums);
        let ans=0
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let pairs = 0;
            for (let i = 1; i < nums.length; i++) {
                if (Math.abs(nums[i] - nums[i - 1] <= mid)) {
                    pairs++;
                }
            }
            if (pairs >= p) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }
}
