class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numMap = new Map();
        let res = [];
        for (let i = 0; i < nums.length; i++) {
            if (!numMap.has(target - nums[i])) {
                numMap.set(nums[i], i);
            } else {
                res.push(numMap.get(target - nums[i]));
                res.push(i);
            }
        }
        return res;
    }
}
