class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let low = Math.max(...weights);
        let maxWeight = weights.reduce((acc, num) => acc + num, 0);
        let high = maxWeight;
        let ans = 0;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let totaldays = 1;
            let currWeight = 0;
            for (let i = 0; i < weights.length; i++) {
                currWeight += weights[i];
                if (currWeight <= mid) {
                    continue;
                } else {
                    totaldays++;
                    currWeight = weights[i];
                }
            }
            if (totaldays <= days) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }
}
