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
        let right = left;
        let sum = 0;
        while (right < n) {
            sum += nums[right];
            if (sum >= target) {
                console.log(sum, "total", right, "r,left", left);
                minLen = Math.min(minLen, right - left + 1);
            }
            while (sum >= target) {
                sum -= nums[left];
                left++;
                if (sum < target) break;
                console.log(sum, "total more", right, "r,left", left, "min", right - left + 1);
                minLen = Math.min(minLen, right - left + 1);
            }
            right++;
        }
        return minLen === Infinity ? 0 : minLen;
        // let n = nums.length;
        // let minLen = Infinity;
        // for (let i = 0; i < n; i++) {
        //     let sum = 0;
        //     for (let j = i; j < n; j++) {
        //         sum += nums[j];
        //         if (sum >= target) {
        //             minLen = Math.min(minLen, j - i + 1);
        //             break;
        //         }
        //     }
        // }
        // return minLen === Infinity ? 0 : minLen;
    }
}
