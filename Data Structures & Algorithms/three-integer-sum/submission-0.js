class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b)
        let n=nums.length
        let res=[]
        for(let k=0;k<n-2;k++){
            
             if(k>0 && nums[k]===nums[k-1]){
                continue
             }
            let l=k+1,r=n-1

             while(l<r){
                let sum=nums[l]+nums[r]+nums[k]
                if(sum===0){
                    res.push([nums[k],nums[l],nums[r]])
                    while(l<r && nums[l]===nums[l+1]) 
                    {
                        l++
                    }
                    while(l<r && nums[r]===nums[r-1]){
                        r--
                    }
                    l++
                    r--
                }
                else if(sum<0){
                    l++
                }
                else{
                    r--
                }
            }
        }
        return res
        
    }
}
