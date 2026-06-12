class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let n = nums.length;
        let low = 0;
        let mid = 0;
        let high = n - 1;
        while (mid <= high) {
            if (nums[mid] === 1) {
                mid++;
            } else if (nums[mid] === 0) {
                [nums[low], nums[mid]] = [nums[mid], nums[low]];
                low++;
                mid++;
            } else if (nums[mid] === 2) {
                [nums[mid], nums[high]] = [nums[high], nums[mid]];
                high--;
            }
        }
        return nums;
    }
}
