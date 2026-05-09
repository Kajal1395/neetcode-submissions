class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen=new Set()
        for(let x of nums){
            if(seen.has(x)){
                return true
            }
            seen.add(x)
        }
        return false
        // let freqCnt=new Map()
        // for(let i=0;i<nums.length;i++){
        //     if(!freqCnt.has(nums[i])){
        //         freqCnt.set(nums[i],1)
        //     }else{
        //         freqCnt.set(nums[i],freqCnt.get(nums[i])+1)
        //     }
            
        // }
        // for(let [key,value] of freqCnt){
        //     if(value>1){
        //         return true
        //     }
        // }
        // return false
        
    }
}
