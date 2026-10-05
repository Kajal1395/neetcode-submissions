class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (!map.has(nums[i])) {
                map.set(nums[i], 1);
            } else {
                map.set(nums[i], map.get(nums[i]) + 1);
            }
        }
        let bucket = Array.from({ length: nums.length + 1 }, () => []);
        for (let [num, freq] of map) {
            bucket[freq].push(num);
        }
        let ans = [];
        for (let i = bucket.length - 1; i >= 0; i--) {
            for (let num of bucket[i]) {
                if (ans.length === k) return ans;
                ans.push(num);
            }
        }
        return ans;
    }
}
