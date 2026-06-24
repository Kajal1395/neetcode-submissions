class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let n = numbers.length;
        let seen = new Map();
        let res = [];
        for (let i = 0; i < n; i++) {
            if (seen.has(target - numbers[i])) {
                res.push(seen.get(target - numbers[i]) + 1, i + 1);
            } else {
                seen.set(numbers[i], i);
            }
        }
        return res;
    }
}
