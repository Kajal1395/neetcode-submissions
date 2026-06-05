class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let freqMap = new Map();
        let n = nums.length;
        for (let i = 0; i < n; i++) {
            freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1);
        }
        let res = [];
        for (let [key, value] of freqMap) {
            if (value > Math.floor(n / 3)) {
                res.push(key);
            }
        }
        return res;
    }
}
