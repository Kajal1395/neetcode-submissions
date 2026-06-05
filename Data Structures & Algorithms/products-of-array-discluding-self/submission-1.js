class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftProductArr = [];
        let n = nums.length;
        let leftprod = 1;
        for (let i = 0; i < n; i++) {
            if (i === 0) {
                leftProductArr[i] = leftprod;
            } else {
                leftprod *= nums[i - 1];
                leftProductArr[i] = leftprod;
            }
        }
        let rightProdArr = [];
        let rightProd = 1;
        for (let i = n - 1; i >= 0; i--) {
            if (i === n - 1) {
                rightProdArr[i] = rightProd;
            } else {
                rightProd *= nums[i + 1];
                rightProdArr[i] = rightProd;
            }
        }
        console.log(leftProductArr, "left", rightProdArr);
        let res = [];
        for (let i = 0; i < n; i++) {
            res[i] = leftProductArr[i] * rightProdArr[i];
        }
        return res;
    }
}
