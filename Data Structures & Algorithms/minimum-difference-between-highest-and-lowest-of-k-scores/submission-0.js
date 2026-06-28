class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        nums.sort((a, b) => a - b);
        let minDiff = Infinity;
        for (let i = 0; i <= nums.length - k; i++) {
            let temp = nums.slice(i, i + k);
            minDiff = Math.min(temp[temp.length - 1] - temp[0], minDiff);
            console.log(temp, minDiff);
        }
        return minDiff;
    }
}
