class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    arrangeCoins(n) {
        let row = 1;

        while (n >= row) {
            n -= row;
            row++;
        }

        return row - 1;
    }
}
