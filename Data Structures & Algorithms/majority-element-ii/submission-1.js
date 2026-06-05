class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let cnt1 = 0;
        let cnt2 = 0;
        let ele1 = null;
        let ele2 = null;
        let n = nums.length;
        for (let i = 0; i < nums.length; i++) {
            if (cnt1 === 0 && nums[i] !== ele2) {
                cnt1 = 1;
                ele1 = nums[i];
            } else if (cnt2 === 0 && nums[i] !== ele1) {
                cnt2 = 1;
                ele2 = nums[i];
            } else if (ele1 === nums[i]) {
                cnt1++;
            } else if (ele2 === nums[i]) {
                cnt2++;
            } else {
                cnt1--;
                cnt2--;
            }
        }
        // till now we have just found the survivours but they are not the majprity elements.
        // they are the best candidates we need to do manual check
        cnt1 = 0;
        cnt2 = 0;
        for (let i = 0; i < n; i++) {
            if (nums[i] === ele1) cnt1++;
            else if (nums[i] === ele2) cnt2++;
        }
        let res = [];
        if (cnt1 > Math.floor(n / 3)) {
            res.push(ele1);
        }
        if (cnt2 > Math.floor(n / 3)) {
            res.push(ele2);
        }
        return res;
        //TC:O(2N) SC:O(n)
        // let freqMap = new Map();
        // let n = nums.length;
        // for (let i = 0; i < n; i++) {
        //     freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1);
        // }
        // let res = [];
        // for (let [key, value] of freqMap) {
        //     if (value > Math.floor(n / 3)) {
        //         res.push(key);
        //     }
        // }
        // return res;
    }
}
