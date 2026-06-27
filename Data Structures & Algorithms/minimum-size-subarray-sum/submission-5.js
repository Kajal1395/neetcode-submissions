class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let n = nums.length;
        let minLen = Infinity;
        for (let i = 0; i < n; i++) {
            let sum = 0;
            let res = [];
            for (let j = i; j < n; j++) {
                sum += nums[j];

                if (sum >= target) {
                    res.push(nums[j]);
                    minLen = Math.min(j - i + 1, minLen);
                    console.log(j, "sum", sum, "minLen", minLen);
                    break;
                }
            }
        }
        return minLen === Infinity ? 0 : minLen;
    }
}
