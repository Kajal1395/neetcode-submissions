class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        let n = heights.length;
        for (let i = 0; i < n; i++) {
            let l = i-1;
            let r = i+1;
            let width = 1;
            while (l >= 0 && heights[i] <= heights[l]) {
                l--;
                width++;
            }
            while (r < n && heights[i] <= heights[r]) {
                r++;
                width++;
            }
            maxArea = Math.max(maxArea, heights[i] * width);
        }
        return maxArea;
    }
}
