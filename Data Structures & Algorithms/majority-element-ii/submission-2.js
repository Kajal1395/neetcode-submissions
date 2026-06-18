class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let newSet = new Map();
        let n = nums.length;
        for (let i = 0; i < n; i++) {
            newSet.set(nums[i], (newSet.get(nums[i]) || 0) + 1);
        }
        let sorted = [...newSet.entries()].sort((a, b) => b[1] - a[1]);
        let res = [];
        for (let num of sorted) {
            if (num[1] > Math.floor(n / 3)) {
                res.push(num[0]);
            }
        }
        return res;
    }
}
