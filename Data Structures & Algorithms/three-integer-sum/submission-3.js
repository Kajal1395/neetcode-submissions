class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = [];
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            if (nums[i] > 0) break;
            let target = -nums[i];
            let start = i + 1;
            let end = nums.length - 1;
            while (start < end) {
                let sum = nums[start] + nums[end];
                if (sum === target) {
                    res.push([nums[i], nums[start], nums[end]]);
                    while (start < end && nums[start] === nums[start + 1]) start++;
                    while (start < end && nums[end] === nums[end - 1]) end--;
                    start++;
                    end--;
                } else if (sum < target) {
                    start++;
                } else {
                    end--;
                }
            }
        }
        return res;
    }
}
