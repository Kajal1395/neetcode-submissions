class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if(s.length===1) return 1
        let n=s.length
        let maxLen=0
        for(let i=0;i<n;i++){
            let seen= new Map()
            let maxCount=0
            for(let j = i; j < n; j++){
                 seen.set(s[j], (seen.get(s[j]) || 0) + 1)
                 maxCount=Math.max(maxCount,seen.get(s[j]))
                 let windowLen=j-i+1
                 let replacement=windowLen-maxCount
                 if(replacement<=k){
                    maxLen=Math.max(maxLen,windowLen)
                 }
            }
        }
        return maxLen
    }
}
