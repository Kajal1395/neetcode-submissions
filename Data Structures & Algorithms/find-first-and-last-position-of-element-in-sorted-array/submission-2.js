class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums, target) {
        let low = 0;
        let n = nums.length;
        let high = n - 1;
        function getStart(low, high) {
            let startInd = -1;
            while (low <= high) {
                let mid = Math.floor((low + high) / 2);
                if (nums[mid] >= target) {
                    if (nums[mid] === target) startInd = mid;
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
            return startInd;
        }
        let start = getStart(low, high);
        function getEnd() {
            let endInd = -1;
            while (low <= high) {
                let mid = Math.floor((low + high) / 2);
                if (nums[mid] <= target) {
                    if (nums[mid] === target) endInd = mid;
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
            return endInd;
        }
        let end = getEnd(low, high);
        return [start, end];
    }
}
