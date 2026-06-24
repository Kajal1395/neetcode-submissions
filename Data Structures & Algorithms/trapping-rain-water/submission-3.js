class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let waterTrapped = 0;
        let n = height.length;
        let left = 0;
        let right = n - 1;
        let maxLeft = 0;
        let maxRight = 0;
        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] > maxLeft) {
                    maxLeft = height[left];
                } else {
                    waterTrapped += maxLeft - height[left];
                }
                left++;
            } else {
                if (height[right] > maxRight) {
                    maxRight = height[right];
                } else {
                    waterTrapped += maxRight - height[right];
                }
                right--;
            }
        }

        return waterTrapped;
        // let waterTrapped = 0;
        // let n = height.length;
        // let maxLeft = 0;
        // let maxRight = 0;
        // for (let curr = 0; curr < n; curr++) {
        //     for (let i = curr; i < n; i++) {
        //         maxRight = Math.max(maxRight, height[i]);
        //     }
        //     let ht = Math.min(maxLeft, maxRight);
        //     waterTrapped += ht - height[curr];
        // }
        // return waterTrapped;
    }
}
