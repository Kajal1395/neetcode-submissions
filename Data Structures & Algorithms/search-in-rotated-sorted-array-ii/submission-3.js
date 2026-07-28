class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        let low = 0;
        let high = nums.length - 1;
        if (nums[low] === target || nums[high] === target) return true;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (nums[mid] === target) return true;
            if (nums[mid] === nums[low] && nums[mid] === nums[high]) {
                low++;
                high--;
            } else if (nums[mid] >= nums[low]) {
                if (target >= nums[low] && target < nums[mid]) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            } else {
                if (target <= nums[high] && target > nums[mid]) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }
        return false;
    }
}
