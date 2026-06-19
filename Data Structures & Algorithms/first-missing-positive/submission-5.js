class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let numSet = new Set([...nums]);
        let n = nums.length;
        let expected = 1;
        while (nums.includes(expected)) {
            expected++;
        }
        if(!nums.includes(expected)){
            return expected
        }
        return n;
    }
}
