class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */

    subarraysWithKDistinct(nums, k) {
        let n = nums.length;
        function distinctK(nums, k) {
            let left = 0;
            let right = 0;
            let count = 0;
            let unique = new Map();
            while (right < n) {
                unique.set(nums[right], (unique.get(nums[right]) || 0) + 1);
                while (unique.size > k) {
                    unique.set(nums[left], unique.get(nums[left]) - 1);
                    if (unique.get(nums[left]) === 0) {
                        unique.delete(nums[left]);
                    }
                    left++;
                }
                count += right - left + 1;
                right++
            }
            return count
        }
        return distinctK(nums, k) - distinctK(nums, k - 1);

        // let n = nums.length;
        // let count = 0;

        // for (let left = 0; left < n; left++) {
        //     let unique = new Map();
        //     let distinctK = 0;
        //     for (let right = left; right < n; right++) {
        //         if (!unique.has(nums[right])) {
        //             unique.set(nums[right], 0);
        //             distinctK++;
        //         }
        //         unique.set(nums[right], unique.get(nums[right]) + 1);

        //         if (distinctK === k) {
        //             count++;
        //         }

        //         if (distinctK > k) {
        //             break;
        //         }
        //     }
        // }
        // return count;
    }
}
