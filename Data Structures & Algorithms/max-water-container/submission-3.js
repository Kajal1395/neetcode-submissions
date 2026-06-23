class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;
        while (left <= right) {
            let area = 0;
            if (heights[left] <= heights[right]) {
                area = heights[left] * (right - left);
                left++;
            } else if (heights[right] < heights[left]) {
                area = heights[right] * (right - left);
                right--;
            }
            maxArea = Math.max(area, maxArea);
        }
        return maxArea;
        // let area = 0;
        // for (let i = 0; i < heights.length - 1; i++) {
        //     for (let j = i + 1; j < heights.length; j++) {
        //         let height = Math.min(heights[i], heights[j]);
        //         area = Math.max(height * (j - i), area);
        //     }
        // }
        // return area;
    }
}
