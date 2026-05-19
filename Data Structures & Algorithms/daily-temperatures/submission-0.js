class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let n = temperatures.length;

        let res = [];
        for (let i = 0; i < n; i++) {
            let count = 0;
            for (let j = i + 1; j < n; j++) {
                if (temperatures[j] > temperatures[i]) {
                    count = j - i;
                    break
                }
            }
            res.push(count);
        }
        return res
    }
}
