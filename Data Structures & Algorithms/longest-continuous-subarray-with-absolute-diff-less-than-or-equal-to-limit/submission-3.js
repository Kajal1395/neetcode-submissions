class Solution {
    /**
     * @param {number[]} nums
     * @param {number} limit
     * @return {number}
     */
    longestSubarray(nums, limit) {
        let longest = 0;
        let n = nums.length;
        let left = 0;

        for (let right = 0; right < n; right++) {
            let minVal = Infinity;
            let maxVal = -Infinity;
            for (let i = left; i <= right; i++) {
                minVal = Math.min(minVal, nums[i]);
                maxVal = Math.max(maxVal, nums[i]);
            }

            while (Math.abs(maxVal - minVal) > limit) {
                left++;
                minVal = Infinity;
                maxVal = -Infinity;
                for (let i = left; i <= right; i++) {
                    minVal = Math.min(minVal, nums[i]);
                    maxVal = Math.max(maxVal, nums[i]);
                }
            }
            longest = Math.max(longest, right - left + 1);
        }
        return longest;
    }

    // for (let i = 0; i < n; i++) {
    //     let len = 0;
    //     let minVal = nums[i];
    //     let maxVal = nums[i];
    //     for (let j = i; j < n; j++) {
    //         minVal = Math.min(minVal, nums[j]);
    //         maxVal = Math.max(maxVal, nums[j]);
    //         if (Math.abs(maxVal - minVal) <= limit) {
    //             len = j - i + 1;
    //         } else {
    //             break;
    //         }
    //     }
    //     console.log(nums[i], "i", i, "len", len);
    //     longest = Math.max(longest, len);
    // }
    // return longest;
    // }
}
