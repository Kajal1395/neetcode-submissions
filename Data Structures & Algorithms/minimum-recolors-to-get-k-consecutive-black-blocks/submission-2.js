class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        let minColor = Infinity;
        let left = 0;
        let right = 0;
        let n = blocks.length;
        let count = 0;
        while (right < n) {
            if (blocks[right] === "W") {
                count++;
            }
            if (right - left + 1 > k) {
                if (blocks[left] === "W") {
                    count--;
                }
                left++;
            }
            if (right - left + 1 === k) {
                minColor = Math.min(count, minColor);
            }
            right++;
        }

        return minColor;
        // let minColor = Infinity;
        // let n = blocks.length;
        // for (let i = 0; i < n; i++) {
        //     let count = 0;
        //     for (let j = i; j < n; j++) {
        //         if (blocks[j] === "W") {
        //             count++;
        //         }

        //         if (j - i + 1 === k) {
        //             minColor = Math.min(count, minColor);
        //             break;
        //         }
        //     }
        // }
        // return minColor;
    }
}
