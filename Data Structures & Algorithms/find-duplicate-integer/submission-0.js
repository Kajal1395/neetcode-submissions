class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
            let pos = nums[i] - 1;
            if (nums[pos] === -1) {
                console.log(nums[i], "pos");
                return nums[i];
            } else {
                nums[pos] = -1;
            }
        }
    }
}
