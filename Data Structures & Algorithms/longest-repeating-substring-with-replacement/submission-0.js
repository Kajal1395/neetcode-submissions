class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let n=s.length
        let maxLen=0
        for(let i=0;i<n;i++){
            let replaced=0
            let ch=s[i]
            let len=1
            for(let j=0;j<n;j++){
                if(i===j) continue
                if(replaced>=k) break
                if(ch!==s[j] && replaced<k){
                    replaced++
                    len++
                }else{
                    len++
                }
                maxLen=Math.max(maxLen,len)
            }
        }
        return maxLen
    }
}
