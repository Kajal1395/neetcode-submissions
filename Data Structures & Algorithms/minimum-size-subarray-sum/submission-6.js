class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let n = nums.length;
        let minLen = Infinity;
        let left = 0;
        let right = 0;
        let sum = 0;
        while (right < n) {
            sum += nums[right];
            while (sum >= target) {
                minLen = Math.min(minLen, right - left + 1);
                sum -= nums[left];
                left++;
            }
            right++;
        }

        // for (let i = 0; i < n; i++) {
        //     let sum = 0;
        //     for (let j = i; j < n; j++) {
        //         sum += nums[j];
        //         if (sum >= target)
        //             minLen = Math.min(j - i + 1, minLen);
        //             break;
        //         }
        //     }
        // }
        return minLen === Infinity ? 0 : minLen;
    }
}
