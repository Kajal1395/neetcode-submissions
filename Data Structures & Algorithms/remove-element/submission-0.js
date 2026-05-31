class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let ind = 0;
        for (let x of nums) {
            if (x !== val) {
                nums[ind] = x;
                ind++;
            }
        }
        return ind;
    }
}
