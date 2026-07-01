class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums) {
        let n = nums.length;
        let low = 0;
        let high = n - 1;
        while (low < high) {
            let mid = Math.floor((low + high) / 2);
            if (nums[mid] < nums[mid + 1]) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    }
}
