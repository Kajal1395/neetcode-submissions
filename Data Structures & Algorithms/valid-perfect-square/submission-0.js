class Solution {
    /**
     * @param {number} num
     * @return {boolean}
     */
    isPerfectSquare(num) {
        let low = 0;
        let high = num;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (mid * mid === num) return true;
            if (mid * mid < num) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return false;
    }
}
