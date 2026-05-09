class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map=new Map
        for(let i=0;i<nums.length;i++){
            if(!map.has(nums[i])){
                map.set(nums[i],1)
            }else{
                map.set(nums[i],map.get(nums[i])+1)
            }
        }
        let sorteddescMap=[...map.entries()].sort((a,b)=>b[1]-a[1])
        let ans=[]
        for(let i=0;i<k;i++){
            ans.push(sorteddescMap[i][0])
        }
        return ans
        // let maxfreq= -Infinity
        // let secmaxfreq= -Infinity
        // for(let [key,value] of map){
        //     if(value>=maxfreq){
        //         maxfreq=value
        //         secmaxfreq=maxfreq
        //     }

        // }
        // let res=[]
        // for(let [key,value] of map){
        //     if(value===maxfreq){
        //         res.push(value)
        //     }
        //     if(value===secmaxfreq){
        //         res.push(value)
        //     }
        // }
        // return res

    }
}
