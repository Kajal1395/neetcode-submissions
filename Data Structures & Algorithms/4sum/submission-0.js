class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums.sort((a, b) => a - b);
        let n = nums.length;
        let res = [];
        for (let fixed1 = 0; fixed1 < n; fixed1++) {
            if (fixed1 > 0 && nums[fixed1] === nums[fixed1 - 1]) {
                continue;
            }
            for (let fixed2 = n - 1; fixed2 > fixed1; fixed2--) {
                if (fixed2 < n - 1 && nums[fixed2] === nums[fixed2 + 1]) {
                    continue;
                }
                let left = fixed1 + 1;
                let right = fixed2 - 1;
                while (left < right) {
                    let sum = nums[fixed1] + nums[fixed2] + nums[left] + nums[right];
                    if (sum === target) {
                        res.push([nums[fixed1], nums[fixed2], nums[left], nums[right]]);
                        while (left < right && nums[left] === nums[left + 1]) {
                            left++;
                        }
                        while (left < right && nums[right] === nums[right - 1]) {
                            right--;
                        }
                        left++;
                        right--;
                    } else if (sum < target) {
                        // if (nums[left] === nums[left + 1]) {
                        //     left++;
                        //     continue;
                        // }
                        left++;
                    } else if (sum > target) {
                        // if (nums[right] === nums[right - 1]) {
                        //     right--;
                        //     continue;
                        // }
                        right--;
                    }
                }
            }
        }
        return res;
    }
}
