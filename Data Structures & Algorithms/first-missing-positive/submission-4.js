class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let numSet = new Set([...nums]);
        console.log(numSet, "numSet");
        let n = nums.length;
        let expected = 1;
        while (numSet.has(expected)) {
            expected++;
        }
        if(!numSet.has(expected)){
            return expected
        }
        return n;
    }
}
