class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums, k) {
        let maxFreq = 1;
        let n = nums.length;
        let res = Array.from(nums);
        let maxNum = Math.max(...nums);
        console.log(maxNum, "max", res);
        for (let i = 0; i < n; i++) {
            let remainingK = k;
            let j = i;
            let val = nums[j];
            let cnt=1
            if (res.includes(val)) {
                res[i] = val;
                cnt = res.filter((x) => x === val).length;
            }
            while (remainingK > 0 && val < maxNum) {
                val++;
                remainingK--;
                if (res.includes(val)) {
                    res[i] = val;
                    cnt = res.filter((x) => x === val).length;
                }
                maxFreq = Math.max(cnt, maxFreq);
            }
            //check if val in res

            while (remainingK > 0 && j < n) {
                let val = res[j];

                while (remainingK > 0 && val < maxNum) {
                    val++;
                    remainingK--;
                }

                res[j] = val;
                j++;
            }
            let freq = res.filter((x) => x === maxNum).length;
            maxFreq = Math.max(maxFreq, freq);
        }
        return maxFreq;
    }
}
