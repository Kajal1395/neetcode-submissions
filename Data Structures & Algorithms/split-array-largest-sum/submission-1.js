class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        let low = Math.max(...nums);
        let high = nums.reduce((num, acc) => num + acc, 0);
        let ans = -1;
        console.log(high);
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let sum = 0;
            let subarrays = 1;
            for (let i = 0; i < nums.length; i++) {
                if (sum + nums[i] <= mid) {
                    sum += nums[i];
                } else {
                    sum = nums[i];
                    subarrays++;
                }
            }
            if (subarrays <= k) {
                //can I get even small sum for subarrays===k
                
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }
}
