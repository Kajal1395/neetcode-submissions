class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let seen=new Map()
        for(let i=0;i<numbers.length;i++){
            let diff=target-numbers[i]
            if(seen.has(diff) && diff < numbers[i]){
                return [seen.get(diff)+1,i+1]
            }
            seen.set(numbers[i],i)
        }
    }
}
