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
            if (nums[mid] < nums[n - 1]) {
                //mid in second half
                if (target < nums[0]) {
                    //target in second half
                    if (nums[mid] === target) return mid;
                    else if (target < nums[mid]) {
                        //both in same half so we compare with mid
                        high = mid - 1;
                    } else {
                        low = mid + 1;
                    }
                } else {
                    // target in first half
                    high = mid;
                }
            } else {
                //mid in first half
                if (target < nums[0]) {
                    //target in second half
                    low = mid + 1;
                } else {
                    // target in first  half
                    if (nums[mid] === target) return mid;
                    else if (target < nums[mid]) {
                        //both in same half so we compare with mid
                        high = mid - 1;
                    } else {
                        low = mid + 1;
                    }
                }
            }
        }
        return -1;
    }
}
