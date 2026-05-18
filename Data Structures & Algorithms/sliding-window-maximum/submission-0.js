class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let res = [];
        let winK = [];
        let l = 0;
        let r = 0;
        let windowSize = 0;
        while (r < nums.length) {
            winK.push(nums[r]);
            windowSize = r - l + 1;
            if (windowSize > k) {
                winK.shift();
                l++;
                windowSize = r - l + 1;
            }
            if (windowSize === k) {
                let maxVal = -Infinity;
                for (let x of winK) {
                    maxVal = Math.max(x, maxVal);
                }
                res.push(maxVal);
            }
            r++;
        }
        return res;
    }
}
