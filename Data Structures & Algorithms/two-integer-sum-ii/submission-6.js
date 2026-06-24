class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let n = numbers.length;
        let left = 0;
        let right = n - 1;
        while (left < right) {
            if (numbers[left] + numbers[right] === target) {
                return [left + 1, right + 1];
            } else if (numbers[left] + numbers[right] < target) {
                left++;
            } else {
                right--;
            }
        }
    }
}
