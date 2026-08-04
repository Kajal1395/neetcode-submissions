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
            let replaced=0
            let ch=s[i]
            let len=1
            for(let j=i+1;j<n;j++){
                if(ch===s[j]){
                    len++
                }
                else if(replaced<k){
                    replaced++
                    len++
                }else{
                    break
                }
                maxLen = Math.max(maxLen, len)
            }
            maxLen=Math.max(maxLen,len)
        }
        return maxLen
    }
}
