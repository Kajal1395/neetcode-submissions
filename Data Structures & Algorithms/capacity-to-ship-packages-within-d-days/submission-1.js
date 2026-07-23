class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let low = Math.max(...weights);
        let high = weights.reduce((acc, num) => acc + num, 0);
        console.log(high);
        let ans = 0;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            console.log("low", low, "high", high, "mid", mid);
            let dayCount = 1;
            let weight = 0;
            for (let i = 0; i < weights.length; i++) {
                if (weight + weights[i] <= mid) {
                    weight += weights[i];
                } else {
                    dayCount++;
                    weight = weights[i];
                }
            }
            console.log(dayCount, "days");
            if (dayCount <= days) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }
}
