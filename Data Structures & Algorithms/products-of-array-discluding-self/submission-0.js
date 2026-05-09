class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftP=[]
        let rightP=[]
        let result=[]
        let n=nums.length
        for(let i=0;i<n;i++){
            if(i===0){
                leftP[i]=1
            }
            if(i===n-1){
                rightP[n-1]=1
            }
            let currRpd=1
            for(let p=i+1;p<n;p++){
                currRpd *= nums[p]
            }
            rightP[i]=currRpd

            let currLpd=1
            for(let q=i-1;q>=0;q--){
                currLpd *= nums[q]
            }
            leftP[i]=currLpd
        }
        console.log(leftP,rightP)
        for(let i=0;i<n;i++){
            result[i]=leftP[i]*rightP[i]
        }
        return result
    }
}
