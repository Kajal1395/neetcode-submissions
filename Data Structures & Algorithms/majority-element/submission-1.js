class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let majEle = null;
        let count = 0;
        for (let x of nums) {
            if (count === 0) {
                majEle = x;
            }
            count += x === majEle ? 1 : -1;
        }
        return majEle;
        // let majMap = new Map();
        // for (let x of nums) {
        //     majMap.set(x, (majMap.get(x) || 0) + 1);
        //     if (majMap.get(x) > Math.floor(nums.length / 2)) {
        //         return x;
        //     }
        // }
    }
}
