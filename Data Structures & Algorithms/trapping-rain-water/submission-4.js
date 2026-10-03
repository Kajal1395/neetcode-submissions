class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;
        let maxLeft = height[left];
        let maxRight = height[right];
        let water = 0;
        while (left < right) {
            maxLeft = Math.max(maxLeft, height[left]);
            maxRight = Math.max(maxRight, height[right]);
            if (maxLeft <= maxRight) {
                water += maxLeft - height[left];
                left++;
            } else {
                water += maxRight - height[right];
                right--;
            }
        }
        return water;
    }
}
