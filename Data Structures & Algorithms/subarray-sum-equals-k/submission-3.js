class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let n = nums.length;
        let count = 0;
        let seen = new Map();
        seen.set(0, 1);
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += nums[i];
            if (seen.has(sum - k)) {
                count += seen.get(sum - k);
            }
            seen.set(sum, (seen.get(sum) || 0) + 1);
        }
        return count;

        // let n = nums.length;
        // let count = 0;
        // for (let i = 0; i < n; i++) {
        //     let sum = 0;
        //     for (let j = i; j < n; j++) {
        //         sum += nums[j];
        //         if (sum === k) {
        //             count++;
        //         }
        //     }
        // }
        // return count;
    }
}
