class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1);
        }
        let sortedMap = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);
        console.log(sortedMap)
        return sortedMap.slice(0,k).map((item)=>item[0])
    }
}
