class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        let stack = [];
        let n = heights.length;
        for (let i = 0; i < n; i++) {
            while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
                let operEleInd = stack[stack.length - 1];
                stack.pop();
                let pse = stack.length > 0 ? stack[stack.length - 1] : -1;
                let nse = i;
                maxArea = Math.max(maxArea, heights[operEleInd] * (nse - pse - 1));
            }
            stack.push(i);
        }
        while (stack.length > 0) {
            let nse = n;
            let operEleInd = stack[stack.length - 1];
            stack.pop();
            let pse = stack.length > 0 ? stack[stack.length - 1] : -1;
            maxArea = Math.max(maxArea, heights[operEleInd] * (nse - pse - 1));
        }
        return maxArea;

        // Brute force TC:O(n^2) SC:O(1)
        // let maxArea = 0;
        // let n = heights.length;
        // for (let i = 0; i < n; i++) {
        //     let l = i-1;
        //     let r = i+1;
        //     let width = 1;
        //     while (l >= 0 && heights[i] <= heights[l]) {
        //         l--;
        //         width++;
        //     }
        //     while (r < n && heights[i] <= heights[r]) {
        //         r++;
        //         width++;
        //     }
        //     maxArea = Math.max(maxArea, heights[i] * width);
        // }
        // return maxArea;
    }
}
