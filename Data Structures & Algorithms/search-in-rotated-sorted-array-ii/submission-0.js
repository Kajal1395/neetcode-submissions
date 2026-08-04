class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        let low = 0;
        let high = nums.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if ((nums[low] === nums[mid]) === nums[high]) {
                low++;
                high--;
            }
            if (target === nums[mid]) {
                return true;
            } else if (nums[low] < nums[mid]) {
                if (nums[low] <= target && target < nums[mid]) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            } else {
                if (nums[mid] < target && target <= nums[high]) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }
        return false;
    }
}
