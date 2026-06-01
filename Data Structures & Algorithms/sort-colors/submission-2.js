class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let low = 0;
        let mid = 0;
        let high = nums.length - 1;
        while (mid <= high) {
            if (nums[mid] === 0) {
                [nums[low], nums[mid]] = [nums[mid], nums[low]];
                mid++;
                low++;
            } else if (nums[mid] === 2) {
                [nums[mid], nums[high]] = [nums[high], nums[mid]];
                high--;
            } else if (nums[mid] === 1) {
                mid++;
            }
        }
        // let count0 = 0;
        // let count1 = 0;
        // let count2 = 0;
        // let n = nums.length;
        // for (let i = 0; i < n; i++) {
        //     if (nums[i] === 0) {
        //         count0++;
        //     } else if (nums[i] === 1) {
        //         count1++;
        //     } else {
        //         count2++;
        //     }
        // }
        // for (let i = 0; i < count0; i++) {
        //     nums[i] = 0;
        // }
        // for (let i = count0; i < count1 + count0; i++) {
        //     nums[i] = 1;
        // }
        // for (let i = count1 + count0; i < n; i++) {
        //     nums[i] = 2;
        // }
    }
}
