class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftProd = Array(nums.length).fill(1);

        for (let i = 1; i < nums.length; i++) {
            leftProd[i] = nums[i - 1] * leftProd[i - 1];
        }
        let rightProd = Array(nums.length).fill(1);

        for (let i = nums.length - 2; i >= 0; i--) {
            rightProd[i] = nums[i + 1] * rightProd[i + 1];
        }
        let res = [];
        for (let i = 0; i < nums.length; i++) {
            res[i] = leftProd[i] * rightProd[i];
        }

        console.log(leftProd, "left");
        console.log(rightProd, "right");
        return res;
    }
}
