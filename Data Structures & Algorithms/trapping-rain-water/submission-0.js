class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n=height.length
        let units=0
        let prefixMax=Array.from(n)
        prefixMax[0]=height[0]
        for(let i=1;i<n;i++){
            prefixMax[i]=Math.max(prefixMax[i-1],height[i])
        }
        let suffixMax=Array.from(n)
        suffixMax[n-1]=height[n-1]
        for(let i=n-2;i>=0;i--){
            suffixMax[i]=Math.max(suffixMax[i+1],height[i])
        }

        for(let i=0;i<n;i++){
            let leftMax=prefixMax[i]
            let rightMax=suffixMax[i]
                if(height[i]<leftMax && height[i]<rightMax){
                    let minHt=Math.min(leftMax,rightMax)
                    units+=minHt-height[i]
                }
            }
        return units
    }
}
