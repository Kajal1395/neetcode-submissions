class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    arrangeCoins(n) {
        let rowsCompleted = 0;
        let availableCoins = n;
        for (let i = 1; i <= n; i++) {
            availableCoins -= i;
            if (availableCoins > 0) {
                rowsCompleted++;
            }
        }
        return rowsCompleted;
    }
}
