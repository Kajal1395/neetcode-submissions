class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let unique = new Set();
        for (let x of nums) {
            if (unique.has(x)) {
                return true;
            }
            unique.add(x);
        }
        return false;
    }
}
