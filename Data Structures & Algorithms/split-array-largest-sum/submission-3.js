class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        let low = Math.max(...nums);
        let high = nums.reduce((acc, num) => acc + num, 0);

        let ans = 0;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let sum = 0;
            let subArr = 1;
            for (let i = 0; i < nums.length; i++) {
                if (sum + nums[i] <= mid) {
                    sum += nums[i];
                } else {
                    subArr++;
                    sum = nums[i];
                }
            }
            if (subArr <= k) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }
}
