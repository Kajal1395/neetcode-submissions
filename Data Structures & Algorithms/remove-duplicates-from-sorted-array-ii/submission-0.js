class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let write = 2;
        let read = 2;
        let n = nums.length;
        while (read < n) {
            if (nums[write - 2] !== nums[read]) {
                nums[write] = nums[read];
                write++;
            }
            read++;
        }
        return write;
    }
}
