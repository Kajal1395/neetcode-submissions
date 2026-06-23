class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let area = 0;
        for (let i = 0; i < heights.length - 1; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                let height = Math.min(heights[i], heights[j]);
                area = Math.max(height * (j - i), area);
            }
        }
        return area;
    }
}
