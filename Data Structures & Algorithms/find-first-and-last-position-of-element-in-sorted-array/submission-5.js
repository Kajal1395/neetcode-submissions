class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums, target) {
        function firstPosition() {
            let ans = -1;
            let low = 0;
            let high = nums.length - 1;
            while (low <= high) {
                console.log(low, "first", high);
                let mid = low + Math.floor((high - low) / 2);
                if (nums[mid] === target) {
                    ans = mid;
                    high = mid - 1;
                } else if (nums[mid] > target) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
            return ans;
        }
        function lastPosition() {
            let ans = -1;
            let low = 0;
            let high = nums.length - 1;
            while (low <= high) {
                console.log(low, "low", high);
                let mid = low + Math.floor((high - low) / 2);
                if (nums[mid] === target) {
                    ans = mid;
                    low = mid + 1;
                }
                else if (nums[mid] < target) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
            return ans;
        }
        return [firstPosition(), lastPosition()];
    }
}
