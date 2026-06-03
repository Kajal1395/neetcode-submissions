class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let ind = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === val) {
                continue;
            }
            nums[ind] = nums[i];
            ind++;
        }
        return ind
    }
}
