class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums, k) {
        let maxFreq = 1;
        let n = nums.length;
        let maxNum = Math.max(...nums);

        for (let i = 0; i < n; i++) {
            let res = [...nums];      // fresh copy for this attempt
            let remainingK = k;
            let j = i;

            while (remainingK > 0 && j < n) {
                let val = res[j];

                while (remainingK > 0 && val < maxNum) {
                    val++;
                    remainingK--;
                }

                res[j] = val;
                j++;
            }

            let freq = res.filter(x => x === maxNum).length;
            maxFreq = Math.max(maxFreq, freq);
        }

        return maxFreq;
    }
}