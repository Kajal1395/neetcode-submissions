class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let n = nums.length;
        nums.sort((a, b) => a - b);
        let res = [];
        for (let i = 0; i < n; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            let target = -nums[i];
            let left = i + 1;
            let right = n - 1;
            while (left < right) {
                let sum = nums[left] + nums[right];
                if (sum === target) {
                    res.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) left++;
                    while (left < right && nums[right] === nums[right + 1]) right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return res;
    }
}
