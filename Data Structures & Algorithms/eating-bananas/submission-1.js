class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let low = 1;
        let high = Math.max(...piles);
        let ans = 0;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let actualhrs = 0;
            for (let i = 0; i < piles.length; i++) {
                if (piles[i] <= mid) actualhrs += 1;
                else actualhrs += Math.ceil(piles[i] / mid);
            }
            if (actualhrs <= h) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }
}
