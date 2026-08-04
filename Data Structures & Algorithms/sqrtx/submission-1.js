class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let low = 0;
        let high = x;
        while (low < high) {
            let mid = Math.floor((low + high) / 2);
            if (mid * mid >= x) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return low;
    }
}
