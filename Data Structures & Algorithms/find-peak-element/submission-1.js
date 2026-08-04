class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums) {
        let low = 0;
        let n = nums.length;
        let high = n - 1;
        while (low <= high) {
            let m = Math.floor((low + high) / 2);
            if (m > 0 && m < n && nums[m] > nums[m - 1] && nums[m] > nums[m + 1]) {
                return m;
            } else if (m > 0 && m < n && nums[m] < nums[m - 1]) {
                high = m - 1;
            } else {
                low = m + 1;
            }
        }
    }
}
