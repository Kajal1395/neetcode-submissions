class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0;
        let n = nums.length;
        let high = nums.length - 1;
        if (target === nums[low]) return 0;
        if (target === nums[high]) return high;
        let mid = -1;
        while (low <= high) {
            mid = Math.floor((low + high) / 2);
            console.log(mid, target);
            if (nums[mid] === target) return mid;
            else if (nums[mid] >= nums[low]) {
                //mid in first half && target in first half
                if (target >= nums[low] && target < nums[mid]) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            } else {
                //mid in second and target om second half
                if (target <= nums[high] && target > nums[mid]) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }
        return -1;
    }
}
