class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let n = nums.length;
        let left = 0;
        let right = 0;
        let res = [];
        let max = -Infinity;
        while (right < n) {
            if (right - left + 1 > k) {
                left++;
            }
            if (right - left + 1 === k) {
                let arr = nums.slice(left, right + 1);
                max = Math.max(...arr);
                res.push(max);
            }
            right++;
        }
        return res
    }
}
