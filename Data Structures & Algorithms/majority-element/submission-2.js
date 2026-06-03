class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let majEle = 0;
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            if (count === 0) {
                majEle = nums[i];
            }
            if (majEle === nums[i]) {
                count++;
            } else {
                count--;
            }
        }
        return majEle;
    }
}
