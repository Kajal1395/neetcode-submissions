class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let majMap = new Map();
        for (let x of nums) {
            majMap.set(x, (majMap.get(x) || 0) + 1);
            if (majMap.get(x) > Math.floor(nums.length / 2)) {
                return x;
            }
        }
    }
}
