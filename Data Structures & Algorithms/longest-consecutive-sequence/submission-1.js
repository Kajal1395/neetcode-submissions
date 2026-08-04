class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let uniqueSorted= [...new Set(nums)].sort((a,b)=>a-b)
        
        let len=1
        let maxLen=-Infinity
        for(let i=1;i<uniqueSorted.length;i++){
            if(uniqueSorted[i]-uniqueSorted[i-1]===1){
                len++
                maxLen=Math.max(maxLen,len)
                console.log(maxLen,uniqueSorted[i])
            }else{
                len=1
            }
        }
        return maxLen!==(-Infinity)?maxLen:0

    }
}
