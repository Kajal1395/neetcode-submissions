class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea=-Infinity
        for(let i=0;i<heights.length-1;i++){
            for(let j=i+1;j<heights.length;j++){
                let ht=Math.min(heights[i],heights[j])
                let area=ht*(j-i)
                maxArea=Math.max(area,maxArea)
            }
        }
        return maxArea
    }
}
