class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l=0,r=0
        let seen=new Map()
        let maxLen=0
        let n=s.length
        let maxCount=0
        while(r<n){
            seen.set(s[r], (seen.get(s[r]) || 0) + 1)
            maxCount=Math.max(maxCount,seen.get(s[r]))
            let windowLen=r-l+1
            let replacement=windowLen-maxCount
            while(replacement>k){
                seen.set(s[l], seen.get(s[l]) - 1)
                l++
                windowLen=r-l+1
                replacement=windowLen-maxCount
            }
                maxLen=Math.max(maxLen,r-l+1)
                r++  
        }
        return maxLen
        // if(s.length===1) return 1
        // let n=s.length
        // let maxLen=0
        // for(let i=0;i<n;i++){
        //     let seen= new Map()
        //     let maxCount=0
        //     for(let j = i; j < n; j++){
        //          seen.set(s[j], (seen.get(s[j]) || 0) + 1)
        //          maxCount=Math.max(maxCount,seen.get(s[j]))
        //          let windowLen=j-i+1
        //          let replacement=windowLen-maxCount
        //          if(replacement<=k){
        //             maxLen=Math.max(maxLen,windowLen)
        //          }
        //     }
        // }
        // return maxLen
    }
}
