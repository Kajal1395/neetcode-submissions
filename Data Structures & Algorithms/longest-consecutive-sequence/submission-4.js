class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
         let set = new Set(nums);

        let maxLen = 0;

        for (let num of set) {

            // only start if num is beginning of sequence
            if (!set.has(num - 1)) {

                let current = num;
                let len = 1;

                while (set.has(current + 1)) {
                    current++;
                    len++;
                }

                maxLen = Math.max(maxLen, len);
            }
        }

        return maxLen;
        
        // let uniqueSorted= [...new Set(nums)].sort((a,b)=>a-b)
        // if(nums.length===1 || uniqueSorted.length===1) return 1
        
        // let len=1
        // let maxLen=-Infinity
        // for(let i=1;i<uniqueSorted.length;i++){
        //     if(uniqueSorted[i]-uniqueSorted[i-1]===1){
        //         len++
        //         maxLen=Math.max(maxLen,len)
        //         console.log(maxLen,uniqueSorted[i])
        //     }else{
        //         len=1
        //     }
        // }
        // return maxLen!==(-Infinity)?maxLen:0

    }
}
