class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums, target) {
        //firstOccurence
        let low = 0;
        let high = nums.length - 1;
        let start = -1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (target === nums[mid]) {
                start = mid;
                high = mid - 1;
            } else if (target > nums[mid]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
            console.log(start);
        }

        //Last Occurence
        low = 0;
        high = nums.length - 1;
        let end = -1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (target === nums[mid]) {
                end = mid;
                low = mid + 1;
            } else if (target > nums[mid]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return [start, end];
    }
}
