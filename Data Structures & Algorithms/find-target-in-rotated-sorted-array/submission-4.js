class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0;
        let n = nums.length;
        let high = n - 1;
        while (low < high) {
            let mid = Math.floor((low + high) / 2);
            if (nums[mid] === target) return mid;
            if (nums[mid] < nums[0]) {
                if (nums[mid] < target) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            } else {
                if (nums[mid] < target) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
        }
        return -1;
    }
}
