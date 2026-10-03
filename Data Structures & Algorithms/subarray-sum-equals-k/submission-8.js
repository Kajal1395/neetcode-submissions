class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let prefmap = new Map();
        let prefix = 0;
        let count = 0;
        prefmap.set(0, 1);
        for (let i = 0; i < nums.length; i++) {
            prefix += nums[i];
            let needed = prefix - k;
            if (prefmap.has(needed)) {
                count += prefmap.get(needed);
            }
            prefmap.set(prefix, (prefmap.get(prefix) || 0) + 1);
        }

        return count;
        // let count = 0;
        // for (let i = 0; i < nums.length; i++) {
        //     let sum = nums[i];
        //     if (sum === k) count++;
        //     for (let j = i + 1; j < nums.length; j++) {
        //         sum += nums[j];
        //         if (sum === k) {
        //             count++;
        //         }
        //     }
        // }
        // return count;
    }
}
