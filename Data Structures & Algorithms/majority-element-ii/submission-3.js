class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let newSet = new Map();
        let n = nums.length;
        let candidate1 = null;
        let count1 = 0;
        let candidate2 = null;
        let count2 = 0;
        for (let i = 0; i < n; i++) {
            if (count1 === 0 && nums[i] !== candidate2) {
                candidate1 = nums[i];
            }
            if (count2 === 0 && nums[i] !== candidate1) {
                candidate2 = nums[i];
            }

            if (nums[i] === candidate1) {
                count1++;
                newSet.set(nums[i], (newSet.get(nums[i]) || 0) + 1);
            } 
            // else {
            //     count1--;
            //     newSet.set(nums[i], (newSet.get(nums[i]) || 0) - 1);
            // }
            if (nums[i] === candidate2) {
                count2++;
                newSet.set(nums[i], (newSet.get(nums[i]) || 0) + 1);
            }
            // else {
            //     count2--;
            //     newSet.set(nums[i], (newSet.get(nums[i]) || 0) - 1);
            // }
        }
        let res = [];
        for (let [key, value] of newSet) {
            console.log(key,'key',value)
            if (value > Math.floor(n / 3)) {
                res.push(key);
            }
        }
        return res;

        // let newSet = new Map();
        // let n = nums.length;
        // for (let i = 0; i < n; i++) {
        //     newSet.set(nums[i], (newSet.get(nums[i]) || 0) + 1);
        // }
        // let sorted = [...newSet.entries()].sort((a, b) => b[1] - a[1]);
        // let res = [];
        // for (let num of sorted) {
        //     if (num[1] > Math.floor(n / 3)) {
        //         res.push(num[0]);
        //     }
        // }
        // return res;
    }
}
