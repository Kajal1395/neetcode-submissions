class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        for(let i=0;i<numbers.length-1;i++){
            if(numbers[i]===numbers[i-1]) continue
            let left=i,right=numbers.length-1
            let res=[]
            while(left<right){
                let sum=numbers[left]+numbers[right]
                if(sum===target){
                    res.push(left+1,right+1)
                    while(left <right && numbers[left]===numbers[left+1]){
                        left++
                    }
                    while(left<right && numbers[right]===numbers[right-1]){
                        right--
                    }
                    left++
                    right--

                }else if(sum<target){
                    left++
                }else{
                    right--
                }

        }
        return res
            
        }
        // let seen=new Map()
        // for(let i=0;i<numbers.length;i++){
        //     let diff=target-numbers[i]
        //     if(seen.has(diff) && diff < numbers[i]){
        //         return [seen.get(diff)+1,i+1]
        //     }
        //     seen.set(numbers[i],i)
        // }
    }
}
