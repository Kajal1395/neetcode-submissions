class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        let m = flowerbed.length;
        let count = 0;
        if (n === 0) return true;
        for (let i = 0; i < m; i++) {
            if (
                i > 0 &&
                i < m - 1 &&
                flowerbed[i - 1] === 0 &&
                flowerbed[i] === 0 &&
                flowerbed[i + 1] === 0
            ) {
                count++;
                flowerbed[i] = 1;
            } else if (
                (i === 0 && flowerbed[i] === 0 && (m === 1 || flowerbed[i + 1] === 0)) ||
                (i === m - 1 && flowerbed[i] === 0 && flowerbed[i - 1] === 0)
            ) {
                count++;
                flowerbed[i] = 1;
            }
            if (count >= n) {
                return true;
            }
        }
        return false;
    }
}
