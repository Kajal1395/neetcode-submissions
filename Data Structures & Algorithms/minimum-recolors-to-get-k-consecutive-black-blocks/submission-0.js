class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        let minColor = Infinity;
        let n = blocks.length;
        for (let i = 0; i < n; i++) {
            let count = 0;
            for (let j = i; j < n; j++) {
                if (blocks[j] === "W") {
                    count++;
                }

                if (j - i + 1 === k) {
                    minColor = Math.min(count, minColor);
                    break;
                }
            }
        }
        return minColor;
    }
}
