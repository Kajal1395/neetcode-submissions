class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        //move based on the heights look for hegher heights
        //area can'nt be negative hence,maxArea=0
        let maxArea=0
        let left=0
        let right=heights.length-1
        while(left<right){
            let ht=Math.min(heights[left],heights[right])
            let width=right-left
            let area=ht*width
            maxArea=Math.max(area,maxArea)
            if(heights[left]<heights[right]){
                left++
            }else{
                right--
            }
        }
        return maxArea

        // let maxArea=-Infinity
        // for(let i=0;i<heights.length-1;i++){
        //     for(let j=i+1;j<heights.length;j++){
        //         let ht=Math.min(heights[i],heights[j])
        //         let area=ht*(j-i)
        //         maxArea=Math.max(area,maxArea)
        //     }
        // }
        // return maxArea
    }
}
