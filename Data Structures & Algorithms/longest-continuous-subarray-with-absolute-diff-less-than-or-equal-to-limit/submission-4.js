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
        let min = [];
        let max = [];

        for (let right = 0; right < n; right++) {
            while (max.length > 0 && nums[right] > max[max.length - 1]) {
                max.pop();
            }
            max.push(nums[right]);
            while (min.length > 0 && nums[right] < min[min.length - 1]) {
                min.pop();
            }
            min.push(nums[right]);

            while (Math.abs(min[0] - max[0]) > limit) {
                if (nums[left] === min[0]) {
                    min.shift();
                }
                if (nums[left] === max[0]) {
                    max.shift();
                }
                left++;
            }
            longest = Math.max(longest, right - left + 1);
        }
        return longest;
    }

    //     let longest = 0;
    //     let n = nums.length;
    //     let left = 0;
    //     let dequeue = [];

    //     for (let right = 0; right < n; right++) {
    //         let minVal = Infinity;
    //         let maxVal = -Infinity;
    //         for (let i = left; i <= right; i++) {
    //             if (dequeue.length > 0 && nums[i] > dequeue[dequeue.length - 1]) {
    //                 dequeue.push(nums[i]);
    //             }
    //             if (dequeue.length > 0 && nums[i] > dequeue[0]) {
    //                 dequeue.shift(nums[i]);
    //             }
    //             minVal = dequeue[0];
    //             maxVal = dequeue[dequeue.length - 1];
    //         }

    //         while (Math.abs(maxVal - minVal) > limit) {
    //             left++;
    //             minVal = Infinity;
    //             maxVal = -Infinity;
    //             for (let i = left; i <= right; i++) {
    //                 minVal = Math.min(minVal, nums[i]);
    //                 maxVal = Math.max(maxVal, nums[i]);
    //             }
    //         }
    //         longest = Math.max(longest, right - left + 1);
    //     }
    //     return longest;
    // }

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
